import { NextPage } from 'next'
import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import aboutText from '../../../public/aboutText.png'
import lesRes from '../../../public/lesRes.png'
import triangle from '../../../public/triangle.gif'
import board from '../../../public/board.jpg'
import points from '../../../public/points.gif'
import arrow from '../../../public/arrow.svg'
import stripes from '../../../public/stripes.gif'
import plants from '../../../public/plants.gif'
import qrtetris from '../../../public/qrtetris.gif'
import trishape from '../../../public/trishape.png'
import { useMobile } from 'src/hooks/useMobile'
import s from './index.module.css'


export const Hero: React.FC<any> = ({ openModal }) => {

    const isMobile = useMobile()

    return (
        <>
            <Section bg>
                <Parallax
                    rotate={[90, 0]}
                    className={s.triangle}
                >
                    <Image
                        src={triangle}
                        alt='анимация типа джой дивижн в триугольнике'
                    />
                </Parallax>
            </Section>

            <div style={{
                height: '10rem'
            }} />

            <Section
                bg
                className={s.trishape}
            >
                <Parallax
                    speed={-20}
                    // disabled={isMobile}
                    style={{
                        position: 'absolute',
                        top: 550,
                        right: 'calc(250px / -2 + var(--section-spacing))', // original is 500px wide
                    }}
                >
                    <Image
                        src={stripes}
                        alt='анимация полосок'
                        style={{
                            transform: 'scale(.5)',
                        }}
                    />
                </Parallax>
                <Parallax
                    speed={10}
                    rotate={[0, 45]}
                    style={{
                        position: 'absolute',
                        top: 400,
                        right: -20,
                    }}
                >
                    <Image
                        src={trishape}
                        alt='анимация полосок'
                    />
                </Parallax>

                <Image
                    src={plants}
                    alt='анимация цветочков'
                    style={{
                        position: 'absolute',
                        top: 700,
                        right: 320,
                        transform: 'scale(.5)',
                    }}
                />
            </Section>


            <Section
                className={s.aboutText}
            >
                <Image
                    src={aboutText}
                    alt='текст про фестиваль в целом'
                />
                <Flex col
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        right: 'var(--section-spacing)',
                        top: 0,
                        marginTop: '1rem',
                        alignItems: 'flex-end',
                    }}
                >
                    <Button
                        theme='fancy'
                        href='/2023'
                    >
                        лето 2023
                    </Button>
                    {!isMobile && (
                        <Image
                            src={arrow}
                            alt='стрелка'
                            style={{
                                marginRight: '4rem',
                            }}
                        />
                    )}
                </Flex>
            </Section>

            <div style={{
                height: isMobile ? 50 : 240
            }} />

            <Section bg>
                <Parallax
                    translateX={[-20, 20]}
                    className={s.board}
                    style={{
                        position: 'relative',
                        top: -28,
                    }}
                >
                    <Image
                        src={board}
                        alt='доска для рукоделия'
                    />
                    <Parallax
                        rotateY={[-45, 45]}
                        style={{
                            position: 'absolute',
                            top: -100,
                            right: 210,
                        }}
                    >
                        <Image
                            src={qrtetris}
                            alt='тетрис с qr кодом'
                        />
                    </Parallax>
                </Parallax>
            </Section>

            <Section
                className={s.lesRes}
            >
                <Image
                    src={lesRes}
                    alt='лесная резиденция'
                />
                <Flex
                    style={{
                        gap: 120,
                    }}
                >
                    <Image
                        src={points}
                        alt='анимация графиков'
                        style={{
                            flex: '0 1 auto'
                        }}
                    />
                    <Flex col
                        style={{
                            maxWidth: 450,
                        }}
                    >
                        <p>
                            Мы unit4.io разрабатываем средовые проекты разных масштабов: от урны до мастерплана. Этим летом мы придумали лесную резиденцию архитекторов, дизайнеров и всех причастных.
                        </p>
                        <p>
                            Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение экосистемы профессионального сообщества в непривычном формате и средовом окружении леса и палаточного лагеря.
                        </p>
                        <p>
                            Мы запустили проектную лабораторию и со студентами готовим инфраструктуру резиденции на берегу озера. Лекции, воркшопы и дискуссии об архитектуре и городе, культуре и искусстве, настоящем и будущем, музыка, танцы, арт, фудкорт, чиллзона закат и рассвет.
                        </p>
                        <p>
                            Предлагаем вместе отойти от городской суеты, шума, иллюзорности, мимолетности происходящего в повседневном и профессиональном, восстав против инфляции смыслов.
                            <br />
                            Мы готовы пойти в новое, медленное, тихое.
                        </p>
                    </Flex>
                </Flex>
            </Section>
        </>
    )
}