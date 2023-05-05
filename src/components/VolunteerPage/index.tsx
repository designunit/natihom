import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { useMobile } from 'src/hooks/useMobile'
import s from './index.module.css'
import openCall from '../../../public/openCall.jpg'
import cog from '../../../public/cog.png'
import eraserhead from '../../../public/eraserhead.gif'
import ramsy from '../../../public/ramsy.gif'
import springCircle from '../../../public/springCircle.png'
import { Title } from '../Title'
import { Parallax } from 'react-scroll-parallax'

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
            >
                <p>
                    Вы первый к кому приходят гости фестиваля со всеми вопросами и переживаниями. Мы заранее собираем всю нужную информацию, за пару дней до начала фестиваля оформляем стенды. На самом фестивале — посменно дежурим и общаемся с посетителями. А ещё ставим телефоны на зарядку и продаём красивые футболки.
                </p>
                <p>
                    «Инфоцентр» также работает в онлайн - формате до фестиваля.Мы общаемся с подписчиками в социальных сетях, отвечаем на вопросы из почты и с сайта.Это не страшно и много времени не занимает — всему научим!
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
            >
                <p>
                    Все постройки мы возводим заново, а после фестиваля — разбираем, поэтому строители нужны нам всегда.
                </p>
                <p>
                    В команду строителей мы ищем людей с разными навыками и опытом:
                </p>
                <p>
                    Мы будем рады если: у тебя есть опыт в строительстве, ты умеешь читать чертежи и работать с людьми, ты быстро учишься, в состоянии забить гвоздь, тебе можно доверить шуруповёрт, и ты очень хочешь строить. Мы очень приветствуем исполнительность, дисциплинированность, физическую выносливость и бережное отношение к инструменту.
                </p>
                <p style={{ fontWeight: 700, }}>
                    Внимание! Наши строители строят объекты инфраструктуры фестиваля. Если вы хотите построить свой арт-объект или реализовать другую идею, отправляйте свои заявки на почту <a href='mailto:natihom@unit4.io'>natihom@unit4.io</a>
                </p>
                <Section bg>
                    <Parallax
                        scaleY={[1, 1.5]}
                        scaleX={[1, .7]}
                        shouldAlwaysCompleteAnimation
                        style={{
                            position: 'absolute',
                            left: '-30%',
                            transformOrigin: 'top center'
                        }}
                    >
                        <Image
                            style={{
                                transformOrigin: 'center top'
                            }}
                            src={springCircle}
                            alt='хромированная пружинка'
                            width={400}
                            height={400}
                        />
                    </Parallax >
                </Section>
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
            >
                <p>
                    Наша задача — накормить и напоить всех волонтеров, организаторов, спикеров, журналистов, фотографов и партнеров, учитывая пожелания и особенности (если они есть).
                </p>
                <p>
                    Кухня работает ежедневно и без выходных: есть хочется всем и всегда. Работники кухни топят, чистят, режут, готовят, моют, раздают и поддерживают чистоту и порядок. Три раза в день кухня становится центром фестивальной жизни. А ещё в дни фестиваля мы работаем в ночь.
                </p>
                <p>
                    Мы ждем: умеющих и любящих готовить, ответственных, веселых и аккуратных людей. (Можно с детьми). Очень важно, чтобы тебя не раздражала вся эта кутерьма, происходящая на кухне — шум, дети, мытье посуды, вечно голодные и не всегда довольные люди.
                </p>
                <Section bg>
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
                </Section>
            </Flex>
        )
    },
    {
        title: (
            <Title
                level={2}
            >
                БИОСТАНЦИЯ
            </Title>
        ),
        text: (
            <Flex
                col
            >
                <p>
                    Наша главная задача — сделать так, чтобы после фестиваля остался минимальный экологический след. Мы собираем отходы и отправляем на переработку то, что можно переработать, вывозим на полигон то, что переработать нельзя, и учим посетителей отличать одно от другого. Организуем точки сбора мусора и место его хранения, раздаем пакеты для раздельного сбора, следим за чистотой на поляне. А ещё ставим шатер от наших партнеров, где рассказываем всем желающим, как беречь природу и делать мир чище и уютнее.
                </p>
                <p>
                    Мы будем рады как творческим девушкам, так и выносливым богатырям — задач хватит на всех. Особенно будем ценить: дружелюбных, экологически просвещенных или стремящихся к этому. Тех, кто любит и ценит природу, физически выносливых и готовых остаться на разбор.
                </p>
            </Flex>
        )
    },
]

export const VolunteerPage = ({ onClick }) => {
    const isMobile = useMobile()
    return (
        <>
            <Section>
                <div
                    className={s.topImage}
                >
                    <Image
                        src={openCall}
                        alt=''
                        fill
                    />
                </div>
                <Title
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        left: 'var(--section-spacing)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        marginLeft: !isMobile && '3rem',
                        color: 'white',
                        ...(isMobile && { fontSize: 18 })
                    }}
                >
                    OPEN CALL ДЛЯ ВОЛОНТЕРОВ
                </Title>
                <Section bg
                    style={{
                        zIndex: 2,
                    }}
                >
                    <Parallax
                        rotateY={[0, 180]}
                        translateY={[0, 50]}
                        shouldAlwaysCompleteAnimation
                        style={{
                            position: 'absolute',
                            top: -200,
                            right: -20,
                        }}
                    >
                        <Image
                            src={cog}
                            alt='хромированная снежинка'
                            className={s.cog}
                        />
                    </Parallax >
                </Section>
            </Section>

            {data.map((x, i) => (
                <Section
                    key={i}
                >
                    <Flex
                        style={{
                            marginBottom: '8rem',
                        }}
                    >
                        {i % 2 == 1 && (
                            <div style={{
                                flex: '1 0 33%',
                            }} />
                        )}
                        <Flex
                            col
                            className={s.flexCol}
                        >
                            {x.title}
                            {x.text}
                        </Flex>
                        {i % 2 == 0 && (
                            <div style={{
                                flex: '1 0 33%',
                            }} />
                        )}
                    </Flex>
                </Section>
            ))}

            <Section bg>
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
            </Section>

            <Section>
                <Flex
                    style={{
                        justifyContent: 'center',
                        marginBottom: '8rem',
                    }}
                >
                    <Button
                        theme='fancy'
                        style={{
                            maxWidth: '35rem',
                            paddingLeft: '3rem',
                            paddingRight: '3rem',
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