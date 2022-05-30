import s from './index.module.css'
import vhs from './vhs.module.css'
import { Button } from '../Button'
import React from 'react'
import Image from 'next/image'
import hero from '/public/static/hero.jpg'
import logo from '/public/static/logo.svg'
import unitlogo from '/public/static/unitlogo.svg'

export const Hero: React.FC<any> = ({ openModal }) => {
    return (
        <>
            <Image
                src={hero}
                alt=''
                layout='fill'
                objectFit='cover'
                priority
                loading='eager'
                quality={100}
            />
            <Image
                src={hero}
                alt=''
                layout='fill'
                objectFit='cover'
                priority
                loading='eager'
                quality={100}
                className={vhs.flick}
            />

            <div className={vhs.scanlines} />

            <div
                className={s.container}
            >
                <div
                    className={s.content}
                >
                    <div className={s.logo}>
                        <Image
                            src={logo}
                            alt=''
                            quality={100}
                            className={vhs.abberation}
                        />
                    </div>

                    <div className={s.logos}>
                        <Image
                            src={unitlogo}
                            alt=''
                            quality={100}
                        />
                        <Image
                            src={unitlogo}
                            alt=''
                            quality={100}
                        />
                        <Image
                            src={unitlogo}
                            alt=''
                            quality={100}
                        />
                        <Image
                            src={unitlogo}
                            alt=''
                            quality={100}
                        />
                    </div>
                    <div className={s.text}>
                        <p>
                            «Burning Man» — ежегодное событие, проходящее в пустыне Блэк-Рок в Неваде. Событие начинается в последний понедельник августа в 00:01 и длится восемь дней. Последний день приходится на День Труда, официальный праздник, отмечаемый в США в первый понедельник сентября, выходной день для большинства организаций. Кульминация происходит в субботу после заката, когда сжигают огромную деревянную статую человека.

                            Сами организаторы определяют событие как эксперимент, но не фестиваль, по созданию сообщества радикального самовыражения, при этом полностью полагающегося только на себя.
                        </p>
                        <div className={s.buttons}>
                            <Button
                                className={vhs.abberationBlock}
                                download
                            >
                                скачиват презентаций
                            </Button>
                            <Button
                                theme='primary'
                                className={vhs.abberationBlock}
                                onClick={openModal}
                            >
                                форма обратной связи
                            </Button>
                        </div>
                    </div>
                    <div />
                    <div className={s.contacts}>
                        <div>
                            по вопросам сотрудничества: <a href='mailto:natihom@unit4.io'>natihom@unit4.io</a>
                        </div>
                        <div>
                            {'координатор резиденции:\n'}
                            Ермолаева Валентина <a href="mailto:ve@unit4.io">ve@unit4.io</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}