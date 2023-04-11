import s from './index.module.css'
import vhs from './vhs.module.css'
import { Button } from '../Button'
import React from 'react'
import Image from 'next/legacy/image'
import hero from '/public/static/hero.jpg'
import logo from '/public/static/logo.svg'
import unitlogo from '/public/static/unitlogo.svg'
import vstretimsa from '/public/static/vstretimsa.svg'
import sv from '/public/static/SV Logo Full Black RGB.svg'
import { useMobile } from 'src/hooks/useMobile'


export const Hero: React.FC<any> = ({ openModal }) => {

    const isMobile = useMobile()

    const aboutBlock = <div className={s.about}>
        <p>
            <span style={{
                fontSize: '1.5rem'
            }} >
                <b>лето 2023</b><br />
                {/* <b> озеро Тихое, Ленобласть</b><br /> */}
            </span>
            трёхдневная лесная резиденция<br />
            архитекторов, дизайнеров<br />
            и всех причастных к городской культуре
        </p>
    </div>
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

                        {isMobile && aboutBlock}

                        <div className={s.logos}>

                            {!isMobile && aboutBlock}

                            <Image
                                src={unitlogo}
                                alt=''
                                quality={100}
                                objectFit='contain'
                            />
                            <Image
                                src={sv}
                                alt=''
                                quality={100}
                            />
                        </div>
                        <div />

                        <div className={s.text}>
                            <p>
                                Мы <a href='https://unit4.io/'>unit4.io</a> разрабатываем средовые проекты разных масштабов: от урны до мастерплана. Этим летом мы придумали лесную резиденцию архитекторов, дизайнеров и всех причастных.
                            </p>
                            <p>
                                Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение экосистемы профессионального сообщества в непривычном формате и средовом окружении леса и палаточного лагеря.
                            </p>
                            <p>
                                Мы запустили проектную лабораторию и со студентами готовим инфраструктуру резиденции на берегу озера. Лекции, воркшопы и дискуссии об архитектуре и городе, культуре и искусстве, настоящем и будущем, музыка, танцы, арт, фудкорт, чиллзона закат и рассвет.
                            </p>
                            <p>
                                Предлагаем вместе отойти от городской суеты, шума, иллюзорности, мимолетности происходящего в повседневном и профессиональном,  восстав против инфляции смыслов.
                            </p>
                            <p>
                                Мы готовы пойти в новое, медленное, тихое.
                            </p>
                            <p>
                                Встретимся на Тихом
                            </p>
                            <div className={s.buttons}>
                                <Button
                                    // className={vhs.abberationBlock}
                                    download
                                >
                                    скачать презентацию 2022
                                </Button>
                                {/* <Button
                                    theme='primary'
                                    className={vhs.abberationBlock}
                                    onClick={openModal}
                                >
                                    зарегистрироваться
                                </Button> */}
                            </div>
                        </div>

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
            </div>
        </>
    )
}