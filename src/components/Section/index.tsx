import classNames from 'classnames'
import React from 'react'
import s from './styles.module.css'

export type SectionProps = {
    className?: string
}

export const Section: React.FC<SectionProps> = ({ className, children, ...props }) => {
    return (
        <div
            {...props}
            className={classNames(s.container, className)}
        >
            <div>
                {children}
            </div>
        </div >
    )
}