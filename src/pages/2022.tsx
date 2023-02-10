import { NextPage } from 'next'
import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import aboutText from '../../public/aboutText.png'
import glitch from '../../public/glitch.gif'
import cog from '../../public/cog.png'
import textImg from '../../public/2022Text.png'

const Index: NextPage = () => {
    return (
        <>
            <div style={{
                height: '10rem'
            }} />

            <Section>
                <Flex>
                    <Flex col>
                        <b>место: оз. Тихое</b>
                        <b>Даты: 16-18 Августа 2022</b>
                        <span> <b>Музыканты:</b> BARKAL, DRKBLCK, LE BEAU SERGE, Dj Countryman,Low Priority, Dj Countryman, Derun, Ply Tone, MR. GUYVER</span>
                        <span><b>Спикеры:</b> BARKAL, DRKBLCK, LE BEAU SERGE, Dj Countryman,Low Priority, Dj Countryman, Derun, Ply Tone, MR. GUYVER</span>
                        <span>Мы разрабатываем средовые проекты разных масштабов: от урны до мастерплана. Этим летом мы придумали лесную резиденцию архитекторов, дизайнеров и всех причастных. Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение экосистемы профессионального сообщества в непривычном формате и средовом окружении леса и палаточного лагеря. Мы запустили проектную лабораторию и со студентами готовим инфраструктуру резиденции на берегу озера. Лекции, воркшопы и дискуссии об архитектуре и городе, культуре и искусстве, настоящем и будущем, музыка, танцы, арт, фудкорт, чиллзона закат и рассвет.</span>
                    </Flex>
                    <iframe
                        src="https://www.youtube.com/embed/7E0ot9iJm_k"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                            flex: '1 0 50%',
                            border: 'none',
                            aspectRatio: '16 / 9',
                        }}
                    />
                </Flex>
            </Section>

            <div style={{
                height: 30,
            }} />

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

            <Section>
                <Flex>
                    <div style={{
                        flex: '1 0 33%'
                    }} />
                    <Image
                        src={aboutText}
                        alt='текст про фестиваль в целом'
                    />
                </Flex>
            </Section>

            <Section style={{
                top: '-13rem',
            }}>
                <Button
                    href='https://disk.yandex.ru/d/nO97CIb7jZjImA'
                    style={{
                        position: 'absolute',
                        top: 'calc(var(--section-spacing) * 1)',
                        right: 'calc(var(--section-spacing) * 2)',
                    }}
                >
                    всякие фотки
                </Button>
                <Image
                    src={textImg}
                    alt='текст на фоне людей'
                />
            </Section>
        </>
    )
}

export default Index