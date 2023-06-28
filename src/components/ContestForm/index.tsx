import * as React from 'react'
import s from './index.module.css'
import { useCallback } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import Image from 'next/image'
import logo from '/public/logo.png'
import { Title } from 'src/components/Title'
import { Button } from 'src/components/Button'
import { ModalContext } from 'src/context/modal'
import fetchOk from '../../../public/fetchOk.svg'
import { Flex } from '../Flex'
import { useMobile } from 'src/hooks/useMobile'

const state = {
    start: 'отправить',
    fetch: 'отправка...',
    ok: 'готово!',
    error: 'что-то поломалось ):\nеще раз?',
}

export const ContestForm: React.FC<any> = () => {
    const { register, handleSubmit, control } = useForm({
        mode: 'onChange',
    })
    const [button, setButton] = React.useState(state.start)
    const buttonDisabled = [state.fetch, state.ok].includes(button)

    const { setModalState } = React.useContext(ModalContext)

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'team',
    })

    const onSubmit = useCallback(async data => {
        setButton(state.fetch)

        await fetch(
            '/api/contest',
            {
                method: 'POST',
                body: JSON.stringify(data),
            }
        )
            .then(async res => await res.json())
            .then(res => {
                const ok = res.result == 'success'
                setButton(ok ? state.ok : state.error)
                setTimeout(() => {
                    setModalState({
                        modalIsOpen: false,
                        tag: 'contest',
                    })
                }, 3000)
            })
            .catch(async e => {
                setButton(state.error)
                console.log(await e)
            })
    }, [])

    if (button == state.ok) {
        return (
            <>
                <Image
                    src={fetchOk}
                    alt={''}
                    style={{
                        height: '100%',
                        margin: 'auto',
                        transform: 'scale(1.25)',
                    }}
                />
                <Button
                    style={{
                        width: 'fit-content',
                        margin: 'auto',
                    }}
                    onClick={() => {
                        setModalState({
                            modalIsOpen: false,
                            tag: 'volunteers',
                        })
                    }}
                >
                    Закрыть
                </Button>
            </>
        )
    }

    const isMobile = useMobile()

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={s.form}
        >
            <div>
                <Title>
                    я в деле!
                </Title>
            </div>

            <div
                className={s.head}
            >
                <Image
                    src={logo}
                    layout='fill'
                    alt=''
                />
            </div>

            <span
                style={{
                    paddingTop: '1rem'
                }}
            >
                Команда
            </span>
            <Flex col
                style={{
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                {fields.map((item, index) => (
                    <div
                        key={item.id}
                        style={{
                            width: 'min(100%, 48em)',
                        }}
                    >
                        <Flex
                            style={{
                                flexDirection: 'row',
                                gap: '.5rem',
                                alignItems: 'center',
                            }}
                        >
                            <input
                                {...register(`team.${index}`)}
                                className={s.textline}
                                placeholder='Имя Фамилия участника команды'
                            />
                            <Button
                                type="button"
                                onClick={() => remove(index)}
                                style={{
                                    fontSize: '.75rem',
                                    padding: isMobile ? '.5rem' : '.5rem 1rem',
                                    ...(isMobile && {
                                        width: 'fit-content',
                                    })
                                }}
                            >
                                удалить
                            </Button>
                        </Flex>
                    </div>
                ))}
                <Button
                    style={{
                        padding: isMobile ? '.5rem' : '.5rem min(50%, 8em)',
                    }}
                    type='button'
                    onClick={() => append('')}
                >
                    Добавить участника
                </Button>
            </Flex>

            <span
                style={{
                    paddingTop: '1rem'
                }}
            >
                Контактные данные
            </span>
            <input
                {...register('captain', { required: true })}
                type='tel'
                className={s.textline}
                placeholder='*Имя Фамилия руководителя команды'
            />
            <input
                {...register('email')}
                placeholder='Почта'
                type='email'
                className={s.textline}
            />
            <input
                {...register('tel')}
                type='tel'
                placeholder='Телефон'
                className={s.textline}
            />
            <input
                {...register('social')}
                placeholder='Ссылка на соцсети'
                className={s.textline}
            />

            <Button
                type='submit'
                disabled={buttonDisabled}
            >
                {button}
            </Button>
        </form>
    )
}
