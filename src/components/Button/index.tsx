import s from './styles.module.css'
import cx from 'classnames'
import Link from 'next/link'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    theme?: 'default' | 'fancy'
    href?: string
    download?: boolean
}

export const Button: React.FC<ButtonProps> = ({ href, children, theme = 'default', className, download, ...props }) => {
    const baseElement = (
        <button
            {...props}
            className={cx(
                s.button,
                s[theme],
                className,
            )}
        >
            {children}
        </button>
    )

    if (href) {
        return (
            <Link
                href={href}
                className={s.link}
                download={download}
            >
                {baseElement}
            </Link>
        )
    }

    return baseElement
}
