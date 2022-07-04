import * as React from 'react'
import s from './index.module.css'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../Button'
import Image from 'next/image'
import logo from '/public/static/logo-small.svg'
import { Title } from '../Title'

const state = {
    start: 'отправить',
    fetch: 'отправка...',
    ok: 'готово!',
    error: 'что-то поломалось ):\nеще раз?',
}

const roles = [
    'Участник',
    'Волонтер',
    'Спикер',
    'Партнер',
]

export const JoinForm: React.FC<any> = ({ setModalIsOpen }) => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange',
    })
    const [button, setButton] = React.useState(state.start)
    const buttonDisabled = [state.fetch, state.ok].includes(button)

    const onSubmit = useCallback(async data => {
        setButton(state.fetch)

        await fetch(
            '/api',
            {
                method: 'POST',
                body: JSON.stringify(data),
            }
        )
            .then(async res => await res.json())
            .then(res => {
                const ok = res.result == 'success'
                setButton(ok ? state.ok : state.error)
                setModalIsOpen(!ok)
            })
            .catch(async e => {
                setButton(state.error)
                console.log(await e)
            })
    }, [])

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={s.form}
        >
            <div>
                <Title>
                    я буду!
                </Title>
            </div>

            <div
                className={s.head}
            >
                <Image
                    src={logo}
                    layout='fill'
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

            <input
                {...register('code')}
                type='text'
                className={s.textline}
                placeholder='Промо-код'
            />

            {/* <select
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
            </select> */}

            <textarea
                {...register('comment')}
                className={s.textarea}
                rows={8}
                placeholder='Комментарий'
            />

            <div>
                После отправки регистрации вы получите письмо с подтверждением и ссылкой на оплату.
            </div>

            <Button
                type='submit'
                theme='primary'
                disabled={buttonDisabled}
            >
                {button}
            </Button>
        </form>
    )
}
