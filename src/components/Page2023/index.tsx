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
import miniMap from '../../../public/miniMap.jpg'
import s from './index.module.css'
import { useMobile } from 'src/hooks/useMobile'

export const Page2023 = () => {
    const isMobile = useMobile()

    const button = (
        <Button
            style={!isMobile ? {} : {
                fontSize: 10,
                width: 'fit-content',
            }}
            id='timepad_twf_register_2077224'
        >
            купить билет
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
                        src={skoro}
                        alt='скоро'
                    />
                    <Image
                        src={aug23}
                        alt='август 2023'
                        className={s.aug23}
                    />
                </Flex>
            </Section>

            {isMobile && (
                <>
                    <Section
                        className={s.mobileButton}
                    >
                        {button}
                    </Section>
                </>
            )}

            <div style={{
                height: 69,
            }} />

            <Section>
                <Flex>
                    <Flex col>
                        <p>
                            Мы <a href='unit4.io'>unit4.io</a> — проектная студия из Петербурга. Работаем с пространством и средой. Этим летом мы вновь повторим лесную резиденцию архитекторов, дизайнеров и всех причастных. В новом месте и в новом масштабе.
                        </p>
                        <p>
                            Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение экосистемы профессионального сообщества в непривычном формате и средовом окружении леса и палаточного лагеря.
                        </p>
                        <p>
                            Мы запустили проектную лабораторию и готовим инфраструктуру резиденции на берегу Вуоксы в карельском лесу с причудливой историей. Лекции, воркшопы и дискуссии об архитектуре и городе, культуре и искусстве, настоящем и будущем, музыка, танцы, баня, арт, трапезная и руины, острова, сосны, закат и рассвет.
                        </p>
                        <p>
                            Предлагаем вместе отойти от городской суеты, шума, иллюзорности, мимолетности происходящего в повседневном и профессиональном,  восстав против инфляции смыслов.
                        </p>
                        <p>
                            Мы готовы пойти в новое, медленное, тихое.
                        </p>
                    </Flex>
                    <div
                        style={{
                            flex: '1 0 auto',
                        }}
                    >
                        {!isMobile && (
                            <>
                                <Flex
                                    col
                                    style={{
                                        alignItems: 'center',
                                    }}
                                >
                                    {button}
                                    <span
                                        style={{
                                            marginTop: '4rem',
                                        }}
                                    >
                                        место резиденции ↴ ↴ ↴
                                    </span>
                                    <Image
                                        src={miniMap}
                                        alt='место резиденции на карте'
                                    />
                                </Flex>
                            </>
                        )}
                    </div>
                </Flex>
            </Section>
            {isMobile && (
                <>
                    <Section
                        bg
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
                    <Flex
                        col
                        style={{

                            alignItems: 'center',
                            marginTop: '4rem',
                        }}
                    >
                        <span>
                            место резиденции ↴ ↴ ↴
                        </span>
                        <Image
                            src={miniMap}
                            alt='место резиденции на карте'
                            style={{
                                width: 'min(100%, 90vw)',
                            }}
                        />
                    </Flex>
                </>
            )}
        </>
    )
}