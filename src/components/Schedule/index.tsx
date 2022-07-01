import s from './index.module.css'
import React from 'react'

const data1 = [
    {
        name: '15:00',
        event: 'Начало регистрации',
    },
    {
        name: '',
        event: 'Начало работы фуд-корта',
    },
    {
        name: '',
        event: 'Открытие основных зонотдыха',
    },
    {
        name: '21:00',
        event: 'Приветственное слово',
    },
    {
        name: '23:00',
        event: 'Конец регистрации',
    },
    {
        name: '00:00',
        event: 'Отбой',
    },
]

const data2 = [
    {
        name: '08:00',
        event: 'Подъем',
    },
    {
        name: '',
        event: 'Продолжение регистрации',
    },
    {
        name: '',
        event: 'Возобновление работы фуд-корта',
    },
    {
        name: '09:00',
        event: 'Брифинг',
    },
    {
        name: '10:00',
        event: 'Старт лектория',
    },
    {
        name: '14:00',
        event: 'Обед',
    },
    {
        name: '15:00',
        event: 'Продолжение лектория',
    },
    // {
    //     name: '19:00',
    //     event: 'Окончание основной программы',
    // },
    {
        name: '20:00',
        event: 'Ужин',
    },
    {
        name: '21:00',
        event: 'Подведение итогов дня',
    },
    {
        name: '22:00 - 4:00',
        event: 'PARTY',
    },
]

const data3 = [
    {
        name: '10:00',
        event: 'Возобновление работы фуд-корта',
    },
    {
        name: '',
        event: 'Музыкальное сопровождение от сонных диджеев',
    },
    {
        name: '13:00',
        event: 'Митап-игра',
    },
    {
        name: '15:00',
        event: 'Отъезд',
    },
]

export const Schedule: React.FC<any> = ({ openModal }) => {
    return (
        <>
            <div
                className={s.container}
            >
                <div className={s.wrapper}>
                    <div>
                        <h2 className={s.h2}>
                            15 ИЮЛЯ
                        </h2>
                    </div>

                    <div
                        className={s.collapse}
                    >
                        {data1.map((x, i) => (
                            <div className={s.text} key={i}>
                                <div>
                                    {x.name}
                                </div>
                                <div>
                                    {x.event}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className={s.h2}>
                            16 ИЮЛЯ
                        </h2>
                    </div>

                    <div
                        className={s.collapse}
                    >
                        {data2.map((x, i) => (
                            <div className={s.text} key={i}>
                                <div>
                                    {x.name}
                                </div>
                                <div>
                                    {x.event}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className={s.h2}>
                            17 ИЮЛЯ
                        </h2>
                    </div>

                    <div
                        className={s.collapse}
                    >
                        {data3.map((x, i) => (
                            <div className={s.text} key={i}>
                                <div>
                                    {x.name}
                                </div>
                                <div>
                                    {x.event}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}