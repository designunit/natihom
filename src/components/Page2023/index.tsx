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
import program from '../../../public/program.svg'
import lektoriy from '../../../public/lektoriy.svg'
import { Title } from '../Title'
import classNames from 'classnames'

export const Page2023 = () => {
    const isMobile = useMobile()

    const button = (
        <Button
            style={!isMobile ? {} : {
                fontSize: 10,
                width: 'fit-content',
            }}
            className={s.cta}
            id='timepad_twf_register_2077224'
        >
            <span>
                купить билет
            </span>
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

                            <a href='http://unit4.io' target='_blank'>unit4.io</a> — проектная студия из Петербурга, работающая с пространством и средой, этим летом вновь повторит лесную резиденцию архитекторов, дизайнеров и всех причастных к городской культуре. В новом месте и новом масштабе. 25 гектар карельского леса с каменной грядой, полянами, руинами финского хутора с выходом на затейливый берег Вуоксы к островам.
                        </p>
                        <p>
                            Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение «экосистемы» профессионального сообщества в непривычном формате и средовом окружении леса и палаточного лагеря.
                        </p>
                        <p>
                            Лекции, воркшопы и дискуссии об архитектуре и городе, культуре и искусстве, настоящем и будущем, музыка, танцы, баня, арт, трапезная и руины, острова, сосны, закат и рассвет.
                        </p>
                        <p>
                            Предлагаем вместе отойти от городской суеты, шума, иллюзорности, мимолетности происходящего в повседневном и профессиональном,  восстав против инфляции смыслов.
                        </p>
                        <p>
                            re-unit новое тихое
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

            <div style={{
                height: '10rem'
            }} />

            <Section>
                <Section
                    className={s.skoro}
                >
                    <Flex>
                        <Image
                            src={program}
                            alt='заголовок Программа'
                        />
                    </Flex>
                </Section>

                <Flex
                    className={s.program}
                >
                    <Flex
                        col
                        className={s.programItem}
                    >
                        <p>11 августа [пт]</p>
                        <Flex className={s.programItemFlex} >
                            <p>
                                13:00
                            </p>
                            <p>
                                Начало регистрации
                                <br />
                                <br />
                                Начало работы фудкорта
                            </p>
                        </Flex>

                        <Flex className={s.programItemFlex} >
                            <p>
                                15:30 - 19:00
                            </p>
                            <p>
                                Медитативная <br /> прогулка-перфоманс <br />
                                от Конно-драматического <br /> театра «ВелесО»
                                <br />
                                <br />
                                <span>
                                    [ каменный стол ]
                                </span>
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                16:00 - 22:00
                            </p>
                            <p>
                                Лаборатория <br />
                                звука noise/ambient
                                <br />
                                <br />
                                <span>
                                    [ main stage ]
                                </span>
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                19:30
                            </p>
                            <p>
                                Ужин
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                21:30
                            </p>
                            <p>
                                Открытие резиденции <br />
                                Приветственное слово <br />
                                UNIT на тихом 2023
                            </p>
                        </Flex>
                    </Flex>

                    <Flex
                        col
                        className={s.programItem}
                    >
                        <p>12 августа [сб]</p>
                        <Flex className={s.programItemFlex} >
                            <p>
                                09:00
                            </p>
                            <p>
                                Подъем
                                <br />
                                <br />
                                Возобновление <br />
                                работы фудкорта
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                10:30
                            </p>
                            <p>
                                Старт лектория <br />
                                <br />
                                <span>
                                    [ main stage ] <br />
                                    [ амфитеатр ] <br />
                                    [ закулисье ]
                                </span>
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                14:00
                            </p>
                            <p>
                                Обед
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                15:00
                            </p>
                            <p>
                                Продолжение лектория
                                <br />
                                <br />
                                <span>
                                    [ main stage ] <br />
                                    [ амфитеатр ] <br />
                                    [ закулисье ]
                                </span>
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                19:30
                            </p>
                            <p>
                                Ужин
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                20:30 - 22:30
                            </p>
                            <p>
                                Спектакль <br />
                                Конно-драматического <br />
                                театра «ВелесО»
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                22:30 – 3:30
                            </p>
                            <p>
                                Party
                                <br />
                                <br />
                                <span>
                                    [ main stage ]
                                </span>
                            </p>
                        </Flex>
                    </Flex>

                    <Flex
                        col
                        className={s.programItem}
                    >
                        <p>13 августа [вс]</p>
                        <Flex className={s.programItemFlex} >
                            <p>
                                11:00
                            </p>
                            <p>
                                Возобновление <br />
                                работы фудкорта
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                13:00
                            </p>
                            <p>
                                Митап-игра
                                <br />
                                <br />
                                <span>
                                    [ закулисье ]
                                </span>
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                15:00
                            </p>
                            <p>
                                Обед
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                16:00 - 17:00
                            </p>
                            <p>
                                Музыкальная <br />
                                поэтическая группа <br />
                                «Девы Евы»
                                <br />
                                <br />
                                <span>
                                    [ main stage ]
                                </span>
                            </p>
                        </Flex>
                        <Flex className={s.programItemFlex} >
                            <p>
                                после 17:00
                            </p>
                            <p>
                                Плавающее закрытие
                            </p>
                        </Flex>
                    </Flex>
                </Flex>
            </Section>

            <div style={{
                height: '10rem'
            }} />

            <Section>
                <Section
                    className={s.skoro}
                >
                    <Flex>
                        <Image
                            src={lektoriy}
                            alt='заголовок Лекторий'
                        />
                    </Flex>
                    <p style={{
                        textAlign: 'center',
                        padding: '3rem 0',
                    }}>
                        лекции, воркшопы, дискуссии <br />
                        архитектура и город, культура и искусство, настоящее и будущее
                    </p>
                </Section>

                <Flex
                    className={classNames(s.program, s.lektoriy)}
                >
                    <Flex col>
                        <div className={s.black}
                            style={{
                                marginBottom: '-1.5rem',
                            }}
                        >
                            секция
                        </div>
                        <Title>
                            РЕ-ЮНИТ
                            <br className={s.noMobile} />
                            <br className={s.noMobile} />
                        </Title>

                        <div className={s.black}
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                padding: '1rem',
                                marginBottom: '-1.5rem',
                            }}
                        >
                            [ main stage ]
                        </div>
                        <p>
                            Центральная площадка на главной поляне. Хэдлайнеры
                            лектория в любопытных комбинациях, многообразие
                            дисциплин и направлений деятельности в точке сборки.
                            Три ключевых события в формате панельных дискуссий
                            и открытых диалогов.
                        </p>

                        <div className={s.black}
                            style={{
                                marginBottom: '-1.5rem',
                            }}
                        >
                            темы
                        </div>
                        <p>
                            Конструирование реальностей <br /> <br />
                            Архитектура как форма знания.
                            Инструмент сшивания разного <br /> <br />
                            Как создавать?
                        </p>
                    </Flex>

                    <Flex col>
                        <div className={s.black}
                            style={{
                                marginBottom: '-1.5rem',
                            }}
                        >
                            секция
                        </div>
                        <Title>
                            ИСКУССТВО <br />
                            ВЗАИМОДЕЙСТВИЯ
                        </Title>

                        <div className={s.black}
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                padding: '1rem',
                                marginBottom: '-1.5rem',
                            }}
                        >
                            [ амфитеатр ]
                        </div>
                        <p>
                            Склон, спрятанный в соснах у руин финского дома. Три
                            события в формате паблик-токов, лекций, тренингов,
                            экскурсий-медитаций. От архитектуры тела через инклюзию
                            к восприятию и вниманию к окружающему. Меняется среда —
                            меняемся мы.
                        </p>
                        <div className={s.black}
                            style={{
                                marginBottom: '-1.5rem',
                            }}
                        >
                            темы
                        </div>
                        <p>
                            Архитектура тела <br /> <br />
                            Универсальный
                            [ инклюзивный ] дизайн <br /> <br />
                            Sound n Space: biological approach
                            тело.звук.пространство.
                            биологических подход <br /> <br />
                            Настроиться на уровень леса, шума
                        </p>
                    </Flex>

                    <Flex col>
                        <div className={s.black}
                            style={{
                                marginBottom: '-1.5rem',
                            }}
                        >
                            секция
                        </div>
                        <Title>
                            ПЕ-РЕ-
                            <br className={s.noMobile} />
                            <br className={s.noMobile} />
                        </Title>

                        <div className={s.black}
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                padding: '1rem',
                                marginBottom: '-1.5rem',
                            }}
                        >
                            [ закулисье ]
                        </div>
                        <p>
                            Опушка с видом на Вуоксу. Четыре события в формате
                            паблик-токов, лекций, экскурсий-перфомансов, воркшопов,
                            шоурумов. ПЕРЕ-фокусировка внимания, осмысленный
                            бизнес и пересборка рабочих процессов, околоприродные
                            технологии и бережное отношение к окружению, природе,
                            пространству, людям.
                        </p>
                        <div className={s.black}
                            style={{
                                marginBottom: '-1.5rem',
                            }}
                        >
                            темы
                        </div>
                        <p>
                            ПЕРЕ-фокусировка внимания. <br /><br />
                            Осмысленный бизнес
                            и пересборка рабочих процессов <br /><br />
                            Доход от отходов <br />
                            Устойчивость и целостный подход
                            в дизайне живых систем.
                            Нюансы практики, а что дальше?

                        </p>
                    </Flex>
                </Flex>
            </Section>

            <div style={{
                height: '10rem'
            }} />

            <Section>
                <Flex
                    className={s.buttonsFlex}
                >
                    <Button
                        href='/about.pdf'
                    >
                        подробнее о резиденции
                    </Button>
                    <Button
                        href='/auditorium.pdf'
                    >
                        программа лектория
                    </Button>
                </Flex>
            </Section>
        </>
    )
}