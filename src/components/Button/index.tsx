import s from './styles.module.css'
import cx from 'classnames'
import Link from 'next/link'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme?: 'default' | 'fancy'
    href?: string
}

export const Button: React.FC<ButtonProps> = ({ href, children, theme = 'default', className, ...props }) => {

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
            >
                {baseElement}
            </Link>
        )
    }

    return baseElement
}
