import s from './styles.module.css'
import cx from 'classnames'
import { slide as MobileMenu } from 'react-burger-menu'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { useEffect, useRef, useState } from 'react'
import { Flex } from '../Flex'
import Link from 'next/link'
import { Section } from '../Section'
import { useMobile } from 'src/hooks/useMobile'
import Hamburger from 'hamburger-react'
const menu = {
    'связь': [
        {
            text: 'чАтик в телеге',
            href: 'https://web.telegram.org/',
        },
        {
            text: 'буржуазный инстаграм',
            href: 'https://web.telegram.org/',
        },
        {
            text: 'уютная ЖЭЖЭшка ',
            href: 'https://web.telegram.org/',
        },
    ],
    'о фестевале': [
        {
            text: 'как это было в 2022',
            href: '/back-in-22',
        },
        {
            text: 'планы на 2023',
            href: '/plans-for-23',
        },
        {
            text: 'полезная информация',
            href: '/useful-info',
        },
    ],
    'полезное': [
        {
            text: 'интересные статейки',
            href: '/articles',
        },
        {
            text: 'интересные книжульки',
            href: '/books',
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
        marginTop: '.125rem',
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
        marginTop: '6rem',
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

    const headerRef = useRef(null)

    return (
        <>
            <header className={s.header}
                ref={headerRef}
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
                                    {links.map(x => (
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
                    <Link href='/'
                        className={s.logo}
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
                                    {links.map(x => (
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
                    </MobileMenu>
                )}
            </header>
            <div
                className={s.headerSpacer}
                style={{
                    height: headerRef.current?.getBoundingClientRect()?.height
                }} />
        </>
    )
}