import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import aboutText from '../../../public/aboutText.png'
import glitch from '../../../public/glitch.gif'
import cog from '../../../public/cog.png'
import { useMobile } from 'src/hooks/useMobile'
import s from './index.module.css'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import dynamic from 'next/dynamic'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { useState } from 'react'

const ReactPlayer = dynamic(() => import('react-player'), {
    ssr: false
})

export const Page2022 = () => {
    const isMobile = useMobile()

    const [buffer, setBuffer] = useState(false)
    return (
        <>
            <Section bg>
                <Parallax
                    scaleX={[1, 1.5]}
                    translateX={[0, -25]}
                    shouldAlwaysCompleteAnimation
                    style={{
                        position: 'absolute',
                        left: '20%',
                        top: -160,
                    }}
                >
                    <Image
                        src={glitch}
                        alt='гличуха'
                        width={320 * .5}
                        height={480 * .5}
                    />
                </Parallax>
            </Section>
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
                    <Flex
                        col
                        style={{
                            flex: '1 1 50%',
                        }}
                    >
                        <b>место: оз. Тихое</b>
                        <b>Даты: 16-18 Августа 2022</b>
                        <span> <b>Музыканты:</b> BARKAL, DRKBLCK, LE BEAU SERGE, Dj Countryman,Low Priority, Dj Countryman, Derun, Ply Tone, MR. GUYVER</span>
                        <span><b>Спикеры:</b> BARKAL, DRKBLCK, LE BEAU SERGE, Dj Countryman,Low Priority, Dj Countryman, Derun, Ply Tone, MR. GUYVER</span>
                        <span>Мы разрабатываем средовые проекты разных масштабов: от урны до мастерплана. Этим летом мы придумали лесную резиденцию архитекторов, дизайнеров и всех причастных. Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение экосистемы профессионального сообщества в непривычном формате и средовом окружении леса и палаточного лагеря. Мы запустили проектную лабораторию и со студентами готовим инфраструктуру резиденции на берегу озера. Лекции, воркшопы и дискуссии об архитектуре и городе, культуре и искусстве, настоящем и будущем, музыка, танцы, арт, фудкорт, чиллзона закат и рассвет.</span>
                    </Flex>
                    <div
                        className={s.playerContainer}
                    >
                        <ReactPlayer
                            url='/video-2022.mp4'
                            playing
                            muted
                            loop
                            onBuffer={() => setBuffer(true)}
                            onBufferEnd={() => setBuffer(false)}
                        />
                        {buffer && (
                            <div
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    color: 'white',
                                    background: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <span>
                                    видео подгружается
                                </span>
                            </div>
                        )}
                    </div>
                </Flex>
            </Section>

            <div style={{
                height: isMobile ? '6rem' : '10rem',
            }} />

            {!isMobile ? (
                <Section bg>
                    <Parallax
                        rotate={[0, 360]}
                        shouldAlwaysCompleteAnimation
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
            <Section
                className={s.galleryContainer}
            >
                <Flex
                    className={s.galleryFlex}
                >
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
                        // wrapperClass={s.swiperWrapper}
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
                    <div
                        style={{
                            position: 'relative',
                            paddingBottom: '50%',
                        }}
                    >
                        <Image
                            src={aboutText}
                            alt='текст про резиденцию в целом'
                            fill
                            style={{
                                objectPosition: 'center top',
                            }}
                        />
                    </div>
                </Flex>
            </Section>
        </>
    )
}