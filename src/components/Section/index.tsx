import classNames from 'classnames'
import React, { CSSProperties } from 'react'
import s from './styles.module.css'

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string
    bg?: boolean
    internalStyle?: CSSProperties
}

export const Section: React.FC<SectionProps> = ({ bg = false, className, children, internalStyle, ...props }) => {
    return (
        <div
            {...props}
            className={classNames(s.container, bg && s.bg, className)}
        >
            <div
                style={internalStyle}
            >
                {children}
            </div>
        </div >
    )
}