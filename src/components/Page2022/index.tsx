import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import aboutText from '../../../public/aboutText.png'
import glitch from '../../../public/glitch.gif'
import cog from '../../../public/cog.png'
import textImg from '../../../public/2022Text.png'
import img92 from '../../../public/img92.webp'
import { useMobile } from 'src/hooks/useMobile'
import s from './index.module.css'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export const Page2022 = () => {
    const isMobile = useMobile()
    return (
        <>
            <div style={{
                height: isMobile ? '6rem' : '10rem',
            }} />

            <Section
                className={s.video}
            >
                <Flex
                    style={{
                        justifyContent: 'space-between',
                    }}
                >

                    <Section bg>
                        <Parallax
                            scale={[1, 1.5]}
                            shouldAlwaysCompleteAnimation
                            style={{
                                position: 'absolute',
                                top: 100,
                                left: '53%',
                            }}
                        >
                            <Image
                                src={img92}
                                alt=''
                                width={200}
                                height={200}
                            />
                        </Parallax>
                    </Section>
                    <Flex
                        col
                        style={{
                            flex: '0 1 50%',
                        }}
                    >
                        <b>место: оз. Тихое</b>
                        <b>Даты: 16-18 Августа 2022</b>
                        <span> <b>Музыканты:</b> BARKAL, DRKBLCK, LE BEAU SERGE, Dj Countryman,Low Priority, Dj Countryman, Derun, Ply Tone, MR. GUYVER</span>
                        <span><b>Спикеры:</b> BARKAL, DRKBLCK, LE BEAU SERGE, Dj Countryman,Low Priority, Dj Countryman, Derun, Ply Tone, MR. GUYVER</span>
                        <span>Мы разрабатываем средовые проекты разных масштабов: от урны до мастерплана. Этим летом мы придумали лесную резиденцию архитекторов, дизайнеров и всех причастных. Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение экосистемы профессионального сообщества в непривычном формате и средовом окружении леса и палаточного лагеря. Мы запустили проектную лабораторию и со студентами готовим инфраструктуру резиденции на берегу озера. Лекции, воркшопы и дискуссии об архитектуре и городе, культуре и искусстве, настоящем и будущем, музыка, танцы, арт, фудкорт, чиллзона закат и рассвет.</span>
                    </Flex>
                    <iframe
                        src="https://www.youtube.com/embed/4eXg4cZT4l8"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                            flex: '0 1 auto',
                            border: 'none',
                            aspectRatio: '9 / 16',
                        }}
                    />

                </Flex>
            </Section>

            <div style={{
                height: 30,
            }} />

            {!isMobile ? (
                <Section bg>
                    <Parallax
                        scaleX={[1, 1.5]}
                        translateX={[0, 25]}
                        shouldAlwaysCompleteAnimation
                        // disabled={isMobile}
                        style={{
                            // position: 'absolute',
                            // top: 400,
                            // right: -20,
                        }}
                    >
                        <Image
                            src={glitch}
                            alt='гличуха'
                        />
                    </Parallax>
                    <Parallax
                        rotate={[0, 360]}
                        shouldAlwaysCompleteAnimation
                        // disabled={isMobile}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: -20,
                        }}
                    >
                        <Image
                            src={cog}
                            alt='хромированая шестерня'
                        />
                    </Parallax>
                </Section>
            ) : (
                <Section bg
                    style={{
                        zIndex: 3,
                    }}
                >
                    <Parallax
                        rotate={[0, 360]}
                        shouldAlwaysCompleteAnimation
                        style={{
                            position: 'absolute',
                            top: -50,
                            right: 10,
                        }}
                    >
                        <Image
                            src={cog}
                            alt='хромированая шестерня'
                            width={100}
                            height={100}
                        />
                    </Parallax>
                </Section>
            )}

            {!isMobile && (
                <Section>
                    <Flex>
                        <div style={{
                            flex: '1 0 33%'
                        }} />
                        <Image
                            src={aboutText}
                            alt='текст про резиденцию в целом'
                        />
                    </Flex>
                </Section>
            )}

            <Section
                style={{
                    top: isMobile ? 0 : '-13rem',
                }}
                className={s.photos}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 'calc(var(--section-spacing) * 1)',
                        right: 'calc(var(--section-spacing) * 2)',
                        background: 'white',
                        fontSize: '4rem',
                        padding: '1rem',
                    }}
                >
                    ↓↓↓ фото2022
                </div>
                <Image
                    src={textImg}
                    alt='текст на фоне людей'
                />
            </Section>
            <div
                className={s.swiperContainer}
            >
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Autoplay]}
                    loop
                    autoplay={{
                        delay: 5000,
                    }}
                    navigation
                    wrapperClass={s.swiperWrapper}
                >
                    {Array(25).fill(null).map((x, i) => (
                        <SwiperSlide
                            key={i}
                            style={{
                                minHeight: '90vh',
                            }}
                        >
                            <Image
                                src={`/2022/img (${i + 1}).JPG`}
                                alt={''}
                                fill
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}