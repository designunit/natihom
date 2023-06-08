import classNames from 'classnames'
import React from 'react'
import s from './styles.module.css'

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string
    col?: boolean
}

export const Flex: React.FC<FlexProps> = ({ className, col = false, children, ...props }) => {
    return (
        <div
            {...props}
            className={classNames(s.container, col && s.col, className)}
        >
            {children}
        </div >
    )
}