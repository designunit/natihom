import s from './index.module.css'
import React from 'react'
import { Button } from '../Button'
import Link from 'next/link'

export const Footer: React.FC<any> = () => {
    return (
        <>
            <div
                className={s.container}
            >
                <div className={s.wrapper}>
                    <div className={s.flex}>
                        <div>
                            <b>Контакты:</b>
                        </div>
                        <div>
                            по вопросам сотрудничества: <Link href='mailto:natihom@unit4.io'>natihom@unit4.io</Link>
                        </div>
                        <div>
                            координатор резиденции: Ермолаева Валентина <Link href='mailto:ve@unit4.io'>ve@unit4.io</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}