import s from './index.module.css'
import React from 'react'

const data = [
    {
        name: 'гошенька',
        event: 'хоп хей',
    },
    {
        name: 'зина',
        event: 'лалалей',
    },
]

export const People: React.FC<any> = ({ openModal }) => {
    return (
        <>
            <div
                className={s.container}
            >
                <div className={s.wrapper}>
                    <div
                        style={{
                            flex: '0 1 50%'
                        }}
                    >
                        <h2 className={s.h2}>
                            Спикеры и темы
                        </h2>
                    </div>

                    <div
                        style={{
                            flex: 1,
                        }}
                    >
                        <div
                            className={s.collapse}
                        >
                            {data.map((x, i) => (
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
            </div>
        </>
    )
}