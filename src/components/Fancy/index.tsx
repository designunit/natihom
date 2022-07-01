import s from './index.module.css'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import bg from '/public/static/map.png'
import Tilt from 'react-parallax-tilt'

export const Fancy: React.FC<any> = ({ openModal }) => {

    const [state, setState] = useState(false)
    useEffect(() => {
        setState(true)
    }, [])
    return (
        <>
            <div
                className={s.container}
            >
                <Image
                    src={bg}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    priority
                    loading='eager'
                    quality={100}
                    className={s.bg}
                />

                <div className={s.wrapper}>

                    <Tilt
                        reset={false}
                        perspective={1000}
                        tiltMaxAngleY={10}
                        tiltMaxAngleX={10}
                        tiltReverse
                        style={{
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <h2 className={s.h2}>
                            Вызов
                        </h2>
                        <h2 className={s.h2}
                            style={{
                                color: 'white',
                                textAlign: 'right',
                                marginTop: 'unset',
                                paddingTop: 'unset',
                            }}
                        >
                            Алло!<br />
                            современность на проводе
                        </h2>
                    </Tilt>

                    <div
                        className={s.collapse}
                    >
                        <Tilt
                            reset={false}
                            perspective={1000}
                            tiltMaxAngleY={10}
                            tiltMaxAngleX={10}
                            tiltReverse
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <p>Актуальный ландшафт проектирования</p>
                            <p>Измененная реальность {'><'} изменяемый образ деятельности</p>
                            <p>Работа в неопределенности</p>
                        </Tilt>
                        <div />
                    </div>


                    <Tilt
                        reset={false}
                        perspective={1000}
                        tiltMaxAngleY={10}
                        tiltMaxAngleX={10}
                        tiltReverse
                        style={{
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <div />
                        <h2 className={s.h2}
                            style={{
                                color: 'white',
                                textAlign: 'right',
                                marginTop: 'unset',
                                paddingTop: 'unset',
                            }}
                        >
                            Настроились?
                        </h2>
                    </Tilt>

                    <div
                        className={s.collapse}
                    >
                        <Tilt
                            reset={false}
                            perspective={1000}
                            tiltMaxAngleY={10}
                            tiltMaxAngleX={10}
                            tiltReverse
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <p>
                                Мифология оптимизма
                            </p>
                            <p>
                                Естественный процесс искусственного
                            </p>
                            <p>
                                В размытой действительности
                            </p>
                            <p>
                                не теряем себя
                            </p>
                        </Tilt>

                        <div />
                    </div>

                    <Tilt
                        reset={false}
                        perspective={1000}
                        tiltMaxAngleY={10}
                        tiltMaxAngleX={10}
                        tiltReverse
                        style={{
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <h2 className={s.h2}>
                            С нами
                        </h2>
                    </Tilt>

                    <div
                        className={s.collapse}
                    >
                        <Tilt
                            reset={false}
                            perspective={1000}
                            tiltMaxAngleY={10}
                            tiltMaxAngleX={10}
                            tiltReverse
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <p>
                                Архитекторы, дизайнеры, арт-сообщество,
                            </p>
                            <p>
                                философы и прогнозисты, натуралисты,
                            </p>
                            <p>
                                инженеры, разработчики, студенты
                            </p>
                        </Tilt>

                        <div />
                    </div>

                    <Tilt
                        reset={false}
                        perspective={1000}
                        tiltMaxAngleY={10}
                        tiltMaxAngleX={10}
                        tiltReverse
                        style={{
                            transformStyle: 'preserve-3d',
                            paddingTop: '2rem'
                        }}
                    >
                        <h2 className={s.h2}
                            style={{
                                color: 'white',
                                textAlign: 'right',
                                marginTop: 'unset',
                                paddingTop: 'unset',
                            }}
                        >
                            Встретимся на тихом
                        </h2>
                    </Tilt>
                </div>

            </div>
        </>
    )
}