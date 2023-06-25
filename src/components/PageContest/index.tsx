import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { useMobile } from 'src/hooks/useMobile'
import s from './index.module.css'
import contestOpenCall from '../../../public/contestOpenCall.svg'
import contestSubtitle from '../../../public/contestSubtitle.svg'
import contestHow from '../../../public/contestHow.svg'
import arrowDown from '../../../public/arrowDown.svg'
import uho from '../../../public/uho.gif'
import ruki from '../../../public/ruki.gif'
import bubble2 from '../../../public/bubble2.png'
import { Button } from '../Button'
import { Roadmap } from '../Roadmap'
import { useContext } from 'react'
import { ModalContext } from 'src/context/modal'

const titleImgsSize = .85


export const PageContest = () => {
    const isMobile = useMobile()
    const { setModalState } = useContext(ModalContext)

    const roadmapData = [
        {
            title: (
                <>
                    Старт Конкурса
                </>
            ),
            text: (
                <>
                    <span>
                        Регистрация c 26 июня 2023 по 10 июля 2023 года. Зарегистрированные команды и участники получат ссылку на установочный зум.
                    </span>
                </>
            ),
        },
        {
            title: (
                <>
                    Установочный зум
                </>
            ),
            text: (
                <>
                    <span>
                        11 июля 2023, 19:00. Описание Конкурса. постановка задачи и разбор Положений о Конкурсе и Технического задани, Ответы на вопросы.
                    </span>
                </>
            ),
        },
        {
            title: (
                <>
                    Прием предложений
                </>
            ),
            text: (
                <>
                    <span>
                        Заявки принимаются с 12 июля 2023 до 16 июля 2023, 23:59 utc+3 (в соответствии с составом, указанным в п.3 Положений о Конкурсе и Техническим заданием) на электронную почту natihom@unit4.io.
                    </span>
                    {!isMobile && (
                        <Section bg>
                            <Parallax
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    top: 115,
                                }}
                            >
                                <Image
                                    src={ruki}
                                    alt='руки + шиза'
                                />
                            </Parallax>
                        </Section>
                    )}
                </>
            ),
        },
        {
            title: (
                <>
                    Установочная встреча с участниками
                </>
            ),
            text: (
                <>
                    <span>
                        не позднее 20 июля 2023. Описание проектной лаборатории. Разбор предложений участников. Формирование графика реализации.
                    </span>
                </>
            ),
        },
        {
            title: (
                <>
                    Старт Проектной лаборатории
                </>
            ),
            text: (
                <>
                    <span>
                        21 июля 2023 - 2 августа 2023 года работа с кураторами, доработка проектов и детализация решений.
                    </span>
                </>
            ),
        },
        {
            title: (
                <>
                    Публикация проектов с указанием авторства.
                </>
            ),
            text: (
                <>
                    <span>
                        не позднее не позднее 3 августа 2023, 23:59 utc+3 участники, попавшие в шорт-лист, становятся резидентами “unitна тихом”
                    </span>
                </>
            ),
        },
        {
            title: (
                <>
                    Выезд на площадку
                </>
            ),
            text: (
                <>
                    <span>
                        Проведения резиденции и старт стройки 8 августа 2023.
                    </span>
                </>
            )
        },
        {
            title: (
                <>
                    Стройка
                </>
            ),
            text: (
                <>
                    <span>
                        8 августа 2023 - 10 августа 2023
                    </span>
                </>
            ),
        },
        {
            title: (
                <>
                    Открытие фестиваля
                </>
            ),
            text: (
                <>
                    <span>
                        11 августа 2023, 13:00 utc+3
                    </span>
                </>
            ),
        },
    ]

    const onFancyClick = () => {
        setModalState({
            modalIsOpen: true,
            tag: 'contest',
        })
    }

    return (
        <>
            {!isMobile && (
                <div style={{
                    height: '10rem',
                }} />
            )}

            <Section>
                <Flex
                    className={s.titleImages}
                >
                    <Image
                        src={contestOpenCall}
                        alt=''
                        priority
                        width={contestOpenCall.width * titleImgsSize}
                        height={contestOpenCall.height * titleImgsSize}
                        style={{
                            maxWidth: '100%',
                            ...(isMobile && {
                                flex: '1 0 auto',
                            })
                        }}
                    />
                    {!isMobile && (
                        <Image
                            src={contestSubtitle}
                            alt=''
                            priority
                            width={contestSubtitle.width * titleImgsSize}
                            height={contestSubtitle.height * titleImgsSize}
                            style={{
                                maxWidth: '100%',
                            }}
                        />
                    )}
                </Flex>
            </Section>

            <Section bg>
                <Parallax
                    scale={[(isMobile ? .5 : 1), 0]}
                    translateY={[0, 50]}
                    translateX={[0, 25]}
                    shouldAlwaysCompleteAnimation
                    style={{
                        position: 'absolute',
                        left: '10%',
                        top: isMobile ? -200 : - 100,
                    }}
                >
                    <Image
                        src={uho}
                        alt='ухо + шиза'
                    />
                </Parallax>
            </Section>

            <div style={{
                height: isMobile ? '6rem' : '6rem',
            }} />

            <Section>
                {!isMobile && (
                    <Section bg>
                        <Parallax
                            translateY={[0, 200]}
                            translateX={[0, 150]}
                            rotateY={[0, 400]}
                            shouldAlwaysCompleteAnimation
                            style={{
                                position: 'absolute',
                                left: '10%',
                                top: 120,
                            }}
                        >
                            <Image
                                src={arrowDown}
                                alt='стрелочка вниз'
                            />
                        </Parallax>
                    </Section>
                )}
                <Flex>
                    <div style={{
                        flex: '1 0 50%',
                    }} />
                    <Flex
                        col
                        style={{
                            flex: '1 1 50%',
                        }}
                    >
                        <span>
                            Открыт сбор заявок от архитекторов и студий, художников и всех жаждущих создания ландшафтных / арт объектов лесной резиденции “unit на тихом” 2023 в Ленинградской области. Для реализации проектов будут выделены гранты, команда кураторов, экспертов и волонтеров.
                        </span>
                        <span>
                            Трехдневная лесная резиденция “unit на тихом” 11-13 августа 2023. Этим летом мы вновь повторим лесную резиденцию архитекторов, дизайнеров и всех причастных. В новом месте и новом масштабе. 25 га карельского леса с каменной грядой, полянами, руинами финского хутора с выходом на затейливый берег Вуоксы к островам.
                        </span>
                        <span>
                            Поляна в 1,5 гектара в карельском лесу на берегу Вуоксы ждет ваших (без)временных конструкций / пространств / объектов / всевозможную работу с ландшафтом во всех смыслах.
                        </span>
                        <span>
                            <b>
                                Выдумка на стыке “бесконечно вечного”. Помыслы и пользовательский опыт: как разместить себя в непривычном ландшафте? как взаимодействовать с лесом? как создавать?
                            </b>
                        </span>
                        <span>
                            Один из ключевых эффектов конкурса - воплощение своего замысла в материале на площадке проведения резиденции. За один месяц провернуть цепочку проектных действий от идеи до реализации! Конкурсный проект - компонент культурного ландшафта, который сформируется на 3 дня фестиваля, чтобы рассказать о другом, новом, а после исчезнуть физически, задав вектор к большему.
                        </span>
                        <span>
                            Регистрацию на участие необходимо пройти до 10 июля 2023 года включительно на сайте.
                        </span>
                    </Flex>
                </Flex>
            </Section>

            <Section bg>
                <Parallax
                    scale={[1, 0]}
                    translateY={[0, 100]}
                    translateX={[0, -150]}
                    rotate={[0, -180]}
                    shouldAlwaysCompleteAnimation
                    disabled={isMobile}
                    style={{
                        position: 'absolute',
                        right: isMobile ? '-15%' : '5%',
                        top: isMobile ? -25 : -100,
                    }}
                >
                    <Image
                        src={bubble2}
                        alt='пузырики'
                        width={bubble2.width * (isMobile ? .5 : 1)}
                        height={bubble2.height * (isMobile ? .5 : 1)}
                    />
                </Parallax>
            </Section>

            {isMobile && (
                <div style={{
                    height: '6rem'
                }} />
            )}

            <Section>
                <Image
                    src={contestHow}
                    alt=''
                    priority
                    style={{
                        maxWidth: '100%',
                    }}
                />
            </Section>

            {!isMobile && (
                <div style={{
                    height: '6rem'
                }} />
            )}

            <Section>
                <Roadmap
                    data={roadmapData}
                />
            </Section>

            <div style={{
                height: isMobile ? '6rem' : '10rem',
            }} />

            <Section>
                <Flex
                    className={s.buttons}
                >
                    <Button
                        theme='fancy'
                        className={s.buttonFancy}
                        style={{
                            fontSize: isMobile ? 10 : 32,
                            width: isMobile && '200px',
                            padding: isMobile && '1.8em',
                        }}
                        onClick={onFancyClick}
                    >
                        <span>
                            подать заявку
                        </span>
                    </Button>
                    <Button
                        style={{
                            fontSize: isMobile ? 'inherit' : 31.5,
                            width: isMobile && '200px',
                            paddingLeft: '1.75em',
                            paddingRight: '1.75em',
                            padding: isMobile && '1.4em 1em'
                        }}
                    >
                        <span>
                            скачать положение
                        </span>
                    </Button>
                </Flex>
            </Section>
        </>
    )
}