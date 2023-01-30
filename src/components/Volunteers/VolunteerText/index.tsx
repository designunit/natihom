import s from './index.module.css'
import React from 'react'

export const VolunteerText: React.FC<any> = () => {
    return (
        <>
            <div
                className={s.container}
            >
                <div className={s.wrapper}>

                    <h2 className={s.h2}>
                        Инфоцентр 
                    </h2>

                    <div className={s.flex}>
                        <div
                            className={s.collapse}
                        >
                            <h2 className={s.h2}
                                style={{
                                    color: 'var(--color-green)',
                                    fontSize: '2rem',
                                }}
                            >
                                ПЕРВОЕ
                            </h2>
                            <div>
                                <b style={{
                                    lineHeight: '2rem'
                                }}>
                                    СТАНЦИЯ «СОСНОВО»<br />
                                </b>
                                35 км до поляны. От Финляндского вокзала едем до станции СОСНОВО, откуда наши волонтеры заберут вас на машине. <br />
                                <b style={{
                                    lineHeight: '2rem'
                                }}>
                                    СТАНЦИЯ «ЛОСЕВО»<br />
                                </b>
                                25 км до поляны. От Финляндского вокзала до станции Лосево, откуда наши волонтеры заберут вас на машине. <br />
                            </div>
                        </div>

                        <div
                            className={s.collapse}
                        >
                            <h2 className={s.h2}
                                style={{
                                    color: 'var(--color-green)',
                                    fontSize: '2rem',
                                }}
                            >
                                ВТОРОЕ
                            </h2>
                            <div>
                                <b style={{
                                    lineHeight: '2rem'
                                }}>
                                    ПО ТРАССЕ «СОРТАВАЛА»<br />
                                </b>
                                Не доезжая до Вуоксы, уходим налево на Брусничное шоссе. Съезд с асфальта будет примерно напротив самого озера. <br />
                                <b style={{
                                    lineHeight: '2rem'
                                }}>
                                    ПО ТРАССЕ «СКАНДИНАВИЯ»<br />
                                </b>
                                25 км до поляны. От Финляндского вокзала до станции Лосево, откуда наши волонтеры заберут вас на машине. <br />
                            </div>
                        </div>

                        <div
                            className={s.collapse}
                        >
                            <h2 className={s.h2}
                                style={{
                                    color: 'var(--color-green)',
                                    fontSize: '2rem',
                                }}
                            >
                                КОМПОТ
                            </h2>
                            <div>
                                <b style={{
                                    lineHeight: '2rem'
                                }}>
                                    ПО ТРАССЕ «СОРТАВАЛА»<br />
                                </b>
                                Не доезжая до Вуоксы, уходим налево на Брусничное шоссе. Съезд с асфальта будет примерно напротив самого озера. <br />
                                <b style={{
                                    lineHeight: '2rem'
                                }}>
                                    ПО ТРАССЕ «СКАНДИНАВИЯ»<br />
                                </b>
                                25 км до поляны. От Финляндского вокзала до станции Лосево, откуда наши волонтеры заберут вас на машине. <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}