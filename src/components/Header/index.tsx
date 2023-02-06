import s from './styles.module.css'
import cx from 'classnames'
import { slide as MobileMenu } from 'react-burger-menu'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import { useRef } from 'react'
import { Flex } from '../Flex'
import Link from 'next/link'

export type HeaderProps = {

}

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

export const Header: React.FC<HeaderProps> = () => {
    // isOpen, onClickMenu

    const headerRef = useRef(null)

    return (
        <>
            <header className={s.header}
                ref={headerRef}
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
                <Link href='/'>
                    <Image
                        src={logo}
                        alt='лого юнит на тихом'
                    />
                </Link>

                {/* <button
                    className={s.menuButton}
                    onClick={onClickMenu}
                >
                    <Image
                        src='/static/menu.svg'
                        width={16}
                        height={14}
                        alt=''
                    />
                </button> */}
            </header>
            <div
                className={s.headerSpacer}
                style={{
                    height: headerRef.current?.getBoundingClientRect()?.height
                }} />

            {/* <MobileMenu
                right
                width='100%'
                isOpen={isOpen}
                customBurgerIcon={false}
                customCrossIcon={false}
                className={s.mobileMenu}
                itemListClassName={s.mobileMenuList}
            >
                <button
                    className={s.closeMenu}
                    onClick={onClickMenu}
                >
                    <Image
                        src='/static/closeMenu.svg'
                        width={14}
                        height={14}
                        alt=''
                    />
                </button>
                {props.menu}
            </MobileMenu> */}
        </>
    )
}