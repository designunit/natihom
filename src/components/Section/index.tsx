import classNames from 'classnames'
import React from 'react'
import s from './styles.module.css'

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string
    bg?: boolean
}

export const Section: React.FC<SectionProps> = ({ bg = false, className, children, ...props }) => {
    return (
        <div
            {...props}
            className={classNames(s.container, bg && s.bg, className)}
        >
            <div>
                {children}
            </div>
        </div >
    )
}