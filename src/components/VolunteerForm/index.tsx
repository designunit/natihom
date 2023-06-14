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

export const VolunteerForm: React.FC<any> = () => {
    const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm({
        mode: 'onChange',
    })
    const [button, setButton] = React.useState(state.start)
    const buttonDisabled = [state.fetch, state.ok].includes(button)

    const { modalState, setModalState } = React.useContext(ModalContext)

    const onSubmit = useCallback(async data => {
        return
        setButton(state.fetch)

        await fetch(
            '/api/volunteers',
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
                {...register('name', { required: true })}
                type='text'
                className={s.textline}
                placeholder='*Имя'
            />

            <div className={s.doubleRow}>
                <input
                    {...register('tel', { required: true })}
                    type='tel'
                    className={s.textline}
                    placeholder='*Телефон'
                />

                <input
                    {...register('email', { required: true })}
                    type='email'
                    className={s.textline}
                    placeholder='*Емейл'
                />
            </div>

            <select
                {...register('role', { required: true })}
                className={s.select}
            >
                {roles.map((x, i) => (
                    <option
                        key={i}
                        value={x}
                    >
                        {x}
                    </option>
                ))}
            </select>

            <input
                {...register('social')}
                placeholder='ссылка на вашу соц. сеть'
                className={s.textline}
            />
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                }}
            >
                <textarea
                    {...register('about', { maxLength: 20000 })}
                    className={s.textarea}
                    rows={8}
                    placeholder='мы любим читать сопроводительные письма'
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

            <Button
                type='submit'
                disabled={buttonDisabled}
            >
                {button}
            </Button>
        </form>
    )
}
