import s from './styles.module.css'
import { slide as MobileMenu } from 'react-burger-menu'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { useState } from 'react'
import { Flex } from '../Flex'
import Link from 'next/link'
import { Section } from '../Section'
import { useMobile } from 'src/hooks/useMobile'
import Hamburger from 'hamburger-react'
import { useRouter } from 'next/router'
import { RunningLine } from '../RunningLine'
import { Button } from '../Button'

const menu = {
    'о резиденции': [
        {
            text: 'анонс 2023',
            href: '/2023',
        },
        {
            text: 'как это было в 2022',
            href: '/2022',
        },
        {
            text: 'программа',
            href: false,
        },
        {
            text: 'правила',
            href: false,
        },

    ],
    'связь': [
        {
            text: 'команда',
            href: '/team'
        },
        {
            text: 'канал в телеграме',
            href: 'https://t.me/unitnatihom',
        },
    ],
    'стать частью': [
        {
            text: 'купить билет',
            href: false,
        },
        {
            text: 'стать волонтером',
            href: '/volunteers',
        },
        {
            text: 'конкурс ландшафтных объектов',
            href: '/contest',
        },
    ],
}

const menuStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '48px',
        height: '48px',
        top: '8px',
        left: '16px',
        marginTop: 'calc(var(--content-spacing) + 2.5rem )',
        marginRight: '10px',
        zIndex: '1101',
    },
    bmBurgerBars: {
        background: 'blue',
    },
    bmMenuWrap: {
        top: '0',
        position: 'fixed',
        height: '100vh'
    },
    bmMenu: {
        width: '100%',
        padding: '1rem',
        backgroundColor: 'white',
    },
    bmOverlay: {
        background: 'var(--color-black)',
        left: '0',
    },
    bmItemList: {
        marginTop: '12rem',
        marginLeft: '10px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
    }
}

export const Header: React.FC = () => {
    const isMobile = useMobile()
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const spechialHeader = false // router.pathname == '/volunteers'

    return (
        <>
            <RunningLine
                direction={'left'}
                animationDuration={'25s'}
            >
                {'Анонс образовательной и музыкальной программ: СКОРО! ОСТАВАЙТЕСТЬ НА '}
                <a
                    href='https://t.me/unitnatihom'
                    style={{
                        color: ' white',
                    }}
                >
                    СВЯЗИ
                </a>
                {'!'}
            </RunningLine>
            <header className={s.header}
                style={spechialHeader ? {
                    background: '#defffcdd',
                } : {}}
            >
                <Section
                    className={s.headerSection}
                >
                    <nav className={s.nav}>
                        {Object.entries(menu).map(([key, links]) => (
                            <div className={s.navItem}
                                key={key}
                            >
                                <div style={{
                                    marginBottom: '1rem',
                                }}>
                                    {key}<span>&nbsp;</span><span>&nbsp;</span>{'>'}
                                </div>
                                <Flex col
                                    style={{
                                        gap: '.5rem',
                                    }}
                                >
                                    {links.map(x => !x.href ? (
                                        <div
                                            key={x.text}
                                            style={{
                                                fontSize: 14,
                                                opacity: .5,
                                                display: 'none',
                                            }}
                                        >
                                            {x.text}
                                        </div>
                                    ) : (
                                        <Link
                                            key={x.text}
                                            href={x.href}
                                        >
                                            {x.text}
                                        </Link>
                                    ))}
                                </Flex>
                            </div>
                        ))}
                    </nav>

                    <div
                        className={s.ticketButton}
                    >
                        <Button
                            style={!isMobile ? {} : {
                                fontSize: 10,
                                width: 'fit-content',
                            }}
                            id='timepad_twf_register_2077224'
                            className={s.cta}
                        >
                            <span>
                                купить билет
                            </span>
                        </Button>
                    </div>
                    <Link href='/'
                        className={s.logo}
                        onClick={() => setIsOpen(false)}
                    >
                        <Image
                            src={logo}
                            alt='лого юнит на тихом'
                        />
                    </Link>
                </Section>


                {isMobile && (
                    <MobileMenu
                        right
                        disableAutoFocus
                        width='100%'
                        isOpen={isOpen}
                        styles={menuStyles}
                        onStateChange={({ isOpen }) => setIsOpen(isOpen)}
                        customCrossIcon={false}
                        className={s.mobileMenu}
                        customBurgerIcon={(
                            <Hamburger
                                toggled={isOpen}
                                size={36}
                                distance='sm'
                                color='black'
                            />
                        )}
                    >
                        {Object.entries(menu).map(([key, links]) => (
                            <div className={s.navItem}
                                key={key}
                            >
                                <div style={{
                                    marginBottom: '1rem',
                                }}>
                                    {key}<span>&nbsp;</span><span>&nbsp;</span>{'>'}
                                </div>
                                <Flex col
                                    style={{
                                        gap: '.5rem',
                                    }}
                                >
                                    {links.map(x => !x.href ? (
                                        <div
                                            key={x.text}
                                            style={{
                                                fontSize: 14,
                                                opacity: .5,
                                                display: 'none',
                                            }}
                                        >
                                            {x.text}
                                        </div>
                                    ) : (
                                        <Link
                                            key={x.text}
                                            href={x.href}
                                            style={{
                                                fontSize: 14,
                                                marginBottom: '.25rem',
                                            }}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {x.text}
                                        </Link>
                                    ))}
                                </Flex>
                            </div>
                        ))}
                    </MobileMenu>
                )}
            </header>
            <div className={s.headerSpacer} />
        </>
    )
}