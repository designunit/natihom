import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import movie from '../../../public/movie.gif'
import aug23 from '../../../public/aug23.svg'
import bubbles from '../../../public/bubbles.png'
import spring from '../../../public/spring.png'
import skoro from '../../../public/skoro.svg'
import s from './index.module.css'
import { useMobile } from 'src/hooks/useMobile'

export const Page2023 = () => {
    const isMobile = useMobile()
    const button = (
        <Button
            href='/wtf'
            style={!isMobile ? {} : {
                fontSize: 10,
                width: 'fit-content',
            }}
        >
            записаться<br />
            в ранние пташки
        </Button>
    )
    return (
        <>
            <Section bg
                className={s.bubbles}
            >
                {!isMobile && (
                    <Parallax
                        scale={[1, .25]}
                        style={{
                            position: 'absolute',
                            right: '25%',
                            top: -50,
                        }}
                    >
                        <Image
                            src={movie}
                            alt='кадры старого фильма'
                        />
                    </Parallax>
                )}
                <Parallax
                    speed={-20}
                    style={{
                        position: 'absolute',
                        right: '15%',
                        top: -200,
                        zIndex: 1,
                    }}
                >
                    <Image
                        src={bubbles}
                        alt='пузырики'
                    />
                </Parallax>
                <Parallax
                    style={{
                        position: 'absolute',
                        top: 250,
                        right: '22%',
                    }}
                >
                    <Image
                        src={spring}
                        alt='пузырики'
                    />
                </Parallax>
            </Section>

            <div style={{
                height: '10rem'
            }} />

            <Section
                className={s.skoro}
            >
                <Flex col>
                    <Image
                        src={aug23}
                        alt='август 2023'
                        className={s.aug23}
                    />
                    <Image
                        src={skoro}
                        alt='скоро'
                    />
                </Flex>
            </Section>

            {isMobile && (
                <Section
                    className={s.mobileButton}
                >
                    {button}
                </Section>
            )}

            <div style={{
                height: 69,
            }} />

            <Section>
                <Flex>
                    <Flex col>
                        <p
                            style={{
                                letterSpacing: '1.25px',
                                lineHeight: '23px',
                            }}
                        >
                            Мы разрабатываем средовые проекты разных масштабов: от урны до мастерплана. Этим летом мы придумали лесную резиденцию архитекторов, дизайнеров и всех причастных. Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение экосистемы профессионального сообщества в непривычном формате и средовом окружении леса и палаточного лагеря. Мы запустили проектную лабораторию и со студентами готовим инфраструктуру резиденции на берегу озера. Лекции, воркшопы и дискуссии об архитектуре и городе, культуре и искусстве, настоящем и будущем, музыка, танцы, арт, фудкорт, чиллзона закат и рассвет.
                        </p>
                    </Flex>
                    <div
                        style={{
                            flex: '1 0 auto',
                        }}
                    >
                        {!isMobile && button}
                    </div>
                </Flex>
            </Section>
            {isMobile && (
                <Section
                    className={s.movie}
                >
                    <Parallax
                        scale={[1, .25]}
                        style={{
                            position: 'relative',
                        }}
                    >
                        <Image
                            src={movie}
                            alt='кадры старого фильма'
                        />
                    </Parallax>
                </Section>
            )}
        </>
    )
}