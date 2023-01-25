import s from './index.module.css'
import vhs from './vhs.module.css'
import { Button } from '../../Button'
import React from 'react'
import Image from 'next/image'
import hero from '/public/static/volunteers/hero.jpg'
import logo from '/public/static/logo.svg'
import unitlogo from '/public/static/unitlogo.svg'
import { useMobile } from 'src/hooks/useMobile'


export const VolunteerHero: React.FC<any> = ({ openModal }) => {

    const isMobile = useMobile()

    return (
        <>
            <div style={{
                position: 'relative'
            }}>
                <div className={s.bgContainer}>
                    <Image
                        src={hero}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        priority
                        unoptimized
                        loading='eager'
                        quality={100}
                        className={s.bg}
                    />
                </div>

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

                            <div className={s.about}>
                                <p>
                                    <span style={{
                                        fontSize: '1.5rem'
                                    }} >
                                        <b>лето 2032</b><br />
                                        {/* <b>скорее всего<br />снова на озере Тихое</b><br /> */}
                                    </span>
                                    лесная резиденция<br />
                                    архитекторов, дизайнеров<br />
                                    и всех причастных к городской культуре
                                </p>
                            </div>

                        <div className={s.logos}>
                            <Image
                                src={unitlogo}
                                alt=''
                                quality={100}
                                objectFit='contain'
                            />
                        </div>

                        <div
                            style={{
                                flex: '0 1 auto',
                                marginTop: 'auto',
                                width: 'fit-content',
                                alignSelf: 'center',
                                color: 'white',
                                fontSize: '2rem',
                            }}
                            className={vhs.abberation}
                        >
                            ↓ ↓ ↓
                        </div>
                        {/* <Button
                            theme='primary'
                            className={vhs.abberationBlock}
                            onClick={openModal}
                            style={{
                                marginTop: 'auto',
                                width: 'fit-content',
                                alignSelf: 'center',
                            }}
                        >
                            зарегистрироваться
                        </Button> */}
                    </div>
                </div>
            </div>
        </>
    )
}