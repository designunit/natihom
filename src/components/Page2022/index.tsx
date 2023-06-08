import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import glitch from '../../../public/glitch.gif'
import cog from '../../../public/cog.png'
import { useMobile } from 'src/hooks/useMobile'
import s from './index.module.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Masonry from 'react-masonry-css'

import img1 from '../../../public/2022/img (1).jpg'
import img2 from '../../../public/2022/img (2).jpg'
import img3 from '../../../public/2022/img (3).jpg'
import img4 from '../../../public/2022/img (4).jpg'
import img5 from '../../../public/2022/img (5).jpg'
import img6 from '../../../public/2022/img (6).jpg'
import img7 from '../../../public/2022/img (7).jpg'
import img8 from '../../../public/2022/img (8).jpg'
import img9 from '../../../public/2022/img (9).jpg'
import img10 from '../../../public/2022/img (10).jpg'
import img11 from '../../../public/2022/img (11).jpg'
import img12 from '../../../public/2022/img (12).jpg'
import img13 from '../../../public/2022/img (13).jpg'
import img14 from '../../../public/2022/img (14).jpg'
import img15 from '../../../public/2022/img (15).jpg'
import img16 from '../../../public/2022/img (16).jpg'
import img17 from '../../../public/2022/img (17).jpg'
import img18 from '../../../public/2022/img (18).jpg'
import img19 from '../../../public/2022/img (19).jpg'
import img20 from '../../../public/2022/img (20).jpg'
import img21 from '../../../public/2022/img (21).jpg'
import img22 from '../../../public/2022/img (22).jpg'
import img23 from '../../../public/2022/img (23).jpg'
import img24 from '../../../public/2022/img (24).jpg'
import img25 from '../../../public/2022/img (25).jpg'

const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25
]

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
                    translateY={[0, 200]}
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
                        <b>Даты: 15-17 Июля 2022</b>
                        <span> <b>Музыканты:</b> BARKAL, DRKBLCK, LE BEAU SERGE, Dj Countryman,Low Priority, Dj Countryman, Derun, Ply Tone, MR. GUYVER</span>
                        <span><b>Спикеры:</b> Cергей Переслегин (PK39: Социософт), Евгения Арефьева (Урбаника), Данияр Юсупов и Владимир Петросян (Unit 4), Катя Попова (City makers), Нехмат Самедов (ludi_architects), Алина Бутакова (WorkPlus studio), Артем Никитин (Novaya labs. «в песочнице»), Юлия Ганкевич (Nowadays), Максим Батаев (AMD architects), Степан Глушков и Никита Жарко (ОТЅ Lab), Евгений Левин (оrgаnісpunk), Владимир Масалаб («Мера»), Вадим Зайцев, BIOROBOTY 019,  Антон Щеголев</span>
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
                            top: -100,
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

            <Section>
                <Masonry
                    breakpointCols={{
                        default: 3,
                        768: 2,
                        480: 1,
                    }}
                    className={s.mansoryContainer}
                    columnClassName={s.mansoryCol}
                >
                    {imgArray.map((x, i) => (
                        <>
                            <div
                                key={i}
                                style={{
                                    position: 'relative',
                                    aspectRatio: `${x.width} / ${x.height}`,
                                }}
                            >
                                <Image
                                    src={x}
                                    alt={''}
                                    fill
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </div>
                        </>
                    ))}
                </Masonry>
            </Section>
        </>
    )
}