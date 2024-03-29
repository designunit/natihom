import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import disnry from '../../../public/disnry.gif'
import img56 from '../../../public/img56.webp'
import img7 from '../../../public/img7.webp'
import team from '../../../public/team.png'
import s from './index.module.css'
import { useMobile } from 'src/hooks/useMobile'
import Team from '../Team'

import vovan from '../../../public/team/vovan.jpg'
import liza from '../../../public/team/liza.jpg'
import valuha from '../../../public/team/valuha.jpg'
import danik from '../../../public/team/danik.jpg'
import senya from '../../../public/team/senya.jpg'
import serega from '../../../public/team/serega.jpg'
import danil from '../../../public/team/danil.jpg'
import voka from '../../../public/team/voka.jpg'
import nastuha from '../../../public/team/nastuha.jpg'
import roberto from '../../../public/team/roberto.jpg'
import maria from '../../../public/team/maria.jpg'
import marina from '../../../public/team/marina.jpg'

const data = [
    {
        name: 'Владимир Петросян',
        description: 'сооснователь студии\nDESIGN UNIT 4',
        image: vovan,
    },
    {
        name: 'Елизавета Владимирова',
        description: 'сооснователь студии\nDESIGN UNIT 4\nкуратор образовательной программы',
        image: liza,
    },
    {
        name: 'Валентина Ермолаева',
        description: 'координатор студии DESIGN UNIT 4\nпродюсер резиденции',
        image: valuha,
    },

    {
        name: 'Данияр Юсупов',
        description: 'сооснователь студии\nDESIGN UNIT 4\nэксперт конкурса',
        image: danik,
    },
    {
        name: 'Арсений Юсупов',
        description: 'разработчик студии\nсделал этот сайт',
        image: senya,
    },
    {
        name: 'Сергей Барышев',
        description: 'дизайнер студии\nнарисовал этот сайт',
        image: serega,
    },
    {
        name: 'Даниил Воронин',
        description: 'помошник продюссера',
        image: danil,
    },
    {
        name: 'Виктория Бинковская',
        description: 'Архитектор студии\nкуратор конкурсных команд',
        image: voka,
    },
    {
        name: 'Анастасия Матюшонок',
        description: 'Архитектор студии\nкуратор конкурсных команд',
        image: nastuha,
    },
    {
        name: 'Роберт Галиакбаров',
        description: 'Архитектор студии\nкуратор конкурсных команд',
        image: roberto,
    },
    {
        name: 'Мария Рябова',
        description: 'Помощник продюсера\n(Логистика резиденции)',
        image: maria,
    },
    {
        name: 'Марина Васильева',
        description: 'координатор волонтерского направления',
        image: marina,
    },
]

export const PageTeam = () => {
    const isMobile = useMobile()
    return (
        <>
            <Section bg
                className={s.bubbles}
            >
                {!isMobile && (
                    <Parallax
                        rotateZ={[-360 * 1, 0]}
                        scale={[.5, .5]}
                        shouldAlwaysCompleteAnimation
                        style={{
                            position: 'absolute',
                            left: '25%',
                            top: -50,
                            transformOrigin: '35% center',
                        }}
                    >
                        <Image
                            src={disnry}
                            alt='кадры старого фильма'
                        />
                    </Parallax>
                )}
                <Parallax
                    speed={-20}
                    style={{
                        position: 'absolute',
                        right: '5%',
                        top: -200,
                        zIndex: 1,
                    }}
                >
                    <Image
                        src={img7}
                        alt='пузырики'
                        width={500}
                        height={500}
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
                        src={img56}
                        alt='пузырики'
                        width={400}
                        height={400}
                    />
                </Parallax>
            </Section>

            <div style={{
                height: '10rem'
            }} />

            <Section
                className={s.skoro}
            >
                {/* <div
                    className={s.title}
                    style={{
                        fontFamily: 'Eskos',
                    }}
                >
                    команда
                </div> */}
                <Image
                    src={team}
                    alt=''
                    className={s.imgTeam}
                    style={{
                        width: 'min(100%, 90vw)',
                        marginBottom: '8rem',
                        height: '100%',
                    }}
                />
            </Section>

            <Team
                data={data}
            />

            <div style={{
                height: 69,
            }} />

            {isMobile && (
                <Section
                    className={s.movie}
                >
                    <Parallax
                        scale={[.5, .5]}
                        rotateZ={[-360 * 1, 0]}
                        shouldAlwaysCompleteAnimation
                        style={{
                            position: 'relative',
                            transformOrigin: '35% center',
                        }}
                    >
                        <Image
                            src={disnry}
                            alt='кадры старого фильма'
                        />
                    </Parallax>
                </Section>
            )}
        </>
    )
}