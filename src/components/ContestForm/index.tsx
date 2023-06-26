import * as React from 'react'
import s from './index.module.css'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import logo from '/public/logo.png'
import { Title } from 'src/components/Title'
import { Button } from 'src/components/Button'
import { ModalContext } from 'src/context/modal'
import fetchOk from '../../../public/fetchOk.svg'

const state = {
    start: 'отправить',
    fetch: 'отправка...',
    ok: 'готово!',
    error: 'что-то поломалось ):\nеще раз?',
}

const roles = [
    'Инфоцентр',
    'МАСТЕРСКАЯ',
    'КУХНЯ',
    'ЭКОСТАНЦИЯ',
]

export const ContestForm: React.FC<any> = () => {
    const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm({
        mode: 'onChange',
    })
    const [button, setButton] = React.useState(state.start)
    const buttonDisabled = [state.fetch, state.ok].includes(button)

    const { modalState, setModalState } = React.useContext(ModalContext)

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
                        tag: 'volunteers',
                    })
                }, 3000)
            })
            .catch(async e => {
                setButton(state.error)
                console.log(await e)
            })
    }, [])

    const fieldAbout = watch('about', '')

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

            <input
                {...register('captain', { required: true })}
                type='tel'
                className={s.textline}
                placeholder='*Имя Фамилия руководителя команды'
            />
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                }}
            >
                <textarea
                    {...register('team', { required: true, maxLength: 20000 })}
                    className={s.textarea}
                    rows={8}
                    placeholder='*Имя Фамилия участников команды или участника'
                />
                <div
                    style={{
                        color: fieldAbout.length > 20000 && 'red',
                        position: 'absolute',
                        zIndex: 1,
                        bottom: '.5rem',
                        right: '.5rem',
                    }}
                >
                    {`${fieldAbout.length}/20000`}
                </div>
            </div>

            <span
                style={{
                    paddingTop: '1rem'
                }}
            >
                Контактные данные
            </span>
            <input
                {...register('email')}
                placeholder='Почта'
                className={s.textline}
            />
            <input
                {...register('tel')}
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
