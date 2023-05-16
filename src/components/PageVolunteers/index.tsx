import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { useMobile } from 'src/hooks/useMobile'
import s from './index.module.css'
import blob from '../../../public/blob.gif'
import spring from '../../../public/spring.png'
import springCircle from '../../../public/springCircle.png'
import { Title } from '../Title'
import { Parallax } from 'react-scroll-parallax'
import { useCallback, useContext } from 'react'
import { ModalContext } from 'src/context/modal'

const data = [
    {
        title: (
            <Title
                level={2}
            >
                ИНФОЦЕНТР
            </Title>
        ),
        text: (
            <Flex
                col
                style={{
                    gap: 0,
                }}
            >
                <p>
                    Вы первый к кому приходят гости резиденции со всеми вопросами и переживаниями. Мы заранее собираем всю нужную информацию, за пару дней до начала резиденции оформляем стенды. На самом резиденции — посменно дежурим и общаемся с посетителями. А ещё ставим телефоны на зарядку и продаём красивые футболки.
                </p>
                <p>
                    «Инфоцентр» также работает в онлайн - формате до резиденции. Мы общаемся с подписчиками в социальных сетях, отвечаем на вопросы из почты и с сайта.Это не страшно и много времени не занимает — всему научим!
                </p>
                <p>
                    Мы будем рады людям, которые: ответственны и инициативны, умеют находить общий язык с другими людьми, быстро учатся и ещё быстрее соображают, способны сохранять спокойствие в самых невообразимых ситуациях.
                </p>
            </Flex>
        )
    },
    {
        title: (
            <Title
                level={2}
            >
                МАСТЕРСКАЯ
            </Title>
        ),
        text: (
            <Flex
                col
                style={{
                    gap: 0,
                }}
            >
                <p>
                    Все постройки мы возводим заново, а после резиденции — разбираем, поэтому строители нужны нам всегда.
                </p>
                <p>
                    В команду строителей мы ищем людей с разными навыками и опытом:
                </p>
                <p>
                    Мы будем рады если: у тебя есть опыт в строительстве, ты умеешь читать чертежи и работать с людьми, ты быстро учишься, в состоянии забить гвоздь, тебе можно доверить шуруповёрт, и ты очень хочешь строить. Мы очень приветствуем исполнительность, дисциплинированность, физическую выносливость и бережное отношение к инструменту.
                </p>
                <p style={{ fontWeight: 700, }}>
                    Внимание! Наши строители строят объекты инфраструктуры резиденции. Если вы хотите построить свой арт-объект или реализовать другую идею, отправляйте свои заявки на почту <a href='mailto:natihom@unit4.io'>natihom@unit4.io</a>
                </p>
            </Flex>
        )
    },
    {
        title: (
            <Title
                level={2}
            >
                КУХНЯ
            </Title>
        ),
        text: (
            <Flex
                col
                style={{
                    gap: 0,
                }}
            >
                <p>
                    Наша задача — накормить и напоить всех волонтеров, организаторов, спикеров, журналистов, фотографов и партнеров, учитывая пожелания и особенности (если они есть).
                </p>
                <p>
                    Кухня работает ежедневно и без выходных: есть хочется всем и всегда. Работники кухни топят, чистят, режут, готовят, моют, раздают и поддерживают чистоту и порядок. Три раза в день кухня становится центром фестивальной жизни. А ещё в дни резиденции мы работаем в ночь.
                </p>
                <p>
                    Мы ждем: умеющих и любящих готовить, ответственных, веселых и аккуратных людей. (Можно с детьми). Очень важно, чтобы тебя не раздражала вся эта кутерьма, происходящая на кухне — шум, дети, мытье посуды, вечно голодные и не всегда довольные люди.
                </p>
                {/* <Section bg>
                    <Parallax
                        opacity={[0, 3.5]}
                        easing={[.5, .1, .5, -.1]}
                        shouldAlwaysCompleteAnimation
                        style={{
                            position: 'absolute',
                            right: 0,
                        }}
                    >
                        <Image
                            src={ramsy}
                            alt='гордон рамзи'
                            className={s.ramsy}
                        />
                    </Parallax >
                </Section> */}
            </Flex>
        )
    },
    {
        title: (
            <Title
                level={2}
            >
                ЭКОСТАНЦИЯ
            </Title>
        ),
        text: (
            <Flex
                col
                style={{
                    gap: 0,
                }}
            >
                <p>
                    Наша главная задача — сделать так, чтобы после резиденции остался минимальный экологический след. Мы собираем отходы и отправляем на переработку то, что можно переработать, вывозим на полигон то, что переработать нельзя, и учим посетителей отличать одно от другого. Организуем точки сбора мусора и место его хранения, раздаем пакеты для раздельного сбора, следим за чистотой на поляне. А ещё ставим шатер от наших партнеров, где рассказываем всем желающим, как беречь природу и делать мир чище и уютнее.
                </p>
                <p>
                    Мы будем рады как творческим девушкам, так и выносливым богатырям — задач хватит на всех. Особенно будем ценить: дружелюбных, экологически просвещенных или стремящихся к этому. Тех, кто любит и ценит природу, физически выносливых и готовых остаться на разбор.
                </p>
            </Flex>
        )
    },
]

export const PageVolunteers = () => {
    const isMobile = useMobile()
    const { setModalState } = useContext(ModalContext)
    const onClick = useCallback(() => {
        setModalState({
            tag: 'volunteers',
            modalIsOpen: true,
        })
    }, [])

    return (
        <>
            <Section
                style={{
                    position: 'relative',
                }}
            >
                <Section>
                    <Parallax
                        // scaleY={[1, 1.5]}
                        // scaleX={[1, .7]}
                        // shouldAlwaysCompleteAnimation
                        style={{
                            position: 'absolute',
                            zIndex: -1,
                            top: '-100px',
                            left: '45%',
                        }}
                    >
                        <Image
                            src={blob}
                            alt='хромированная пружинка'
                            width={300}
                            height={300}
                        />
                    </Parallax>
                </Section>
                <Title
                    style={{
                        marginLeft: !isMobile && '3rem',
                        fontFamily: 'Eskos',
                        fontSize: '10rem',
                        lineHeight: '10rem',
                        textAlign: 'left',
                        ...(isMobile && { fontSize: '5rem', lineHeight: '5rem' }),
                    }}
                >
                    OPEN CALL<br />
                    ДЛЯ ВОЛОНТЕРОВ
                </Title>
            </Section>

            <Section>
                <Section bg>
                    <Parallax
                        rotateZ={[0, -45]}
                        translateY={[0, 50]}
                        shouldAlwaysCompleteAnimation
                        style={{
                            position: 'absolute',
                            top: '200px',
                            left: '60%',
                        }}
                    >
                        <Image
                            src={springCircle}
                            alt='хромированная снежинка'
                            className={s.cog}
                            width={500}
                            height={500}
                        />
                    </Parallax>
                </Section>
                <Flex
                    style={{
                        flexWrap: 'wrap',
                    }}
                >
                    {data.map((x, i) => (
                        <Section
                            key={i}
                            className={s.blockSection}
                        >
                            <Flex
                                col
                                className={s.flexCol}
                            >
                                {x.title}
                                {x.text}
                            </Flex>
                        </Section>
                    ))}
                </Flex >
            </Section >

            {/* <Section bg>
                <Parallax
                    rotateZ={[-180, 0]}
                    translateX={[-100, 50]}
                    shouldAlwaysCompleteAnimation
                    style={{
                        position: 'absolute',
                        top: -300,
                    }}
                >
                    <Image
                        src={eraserhead}
                        alt='eraserhead'
                        width={350}
                        height={350}
                        className={s.eraserhead}
                    />
                </Parallax >
            </Section> */}

            < Section >
                <Flex
                    style={{
                        justifyContent: 'center',
                        marginBottom: '8rem',
                        marginTop: '3rem',
                    }}
                >
                    <Button
                        theme='fancy'
                        style={{
                            maxWidth: '35rem',
                            padding: '2.5rem 2rem',
                            margin: '0 auto',
                        }}
                        onClick={onClick}
                    >
                        присоедениться
                    </Button>
                </Flex>
            </Section >
        </>
    )
}