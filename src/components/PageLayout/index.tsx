import { Header } from 'src/components/Header'
import { useState, useCallback } from 'react'
import { Menu } from '../Menu'
import { NextSeo } from 'next-seo'

export const PageLayout: React.FC<any> = props => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const onClick = useCallback((x, e) => {
        setIsOpen(false)
        if (x.href == '/') {
            e.preventDefault()
            props.openModal()
        }
    }, [])

    return (
        <main style={{ position: 'relative' }}>
            <NextSeo
                title='Юнит на тихом'
                description='Описание, пока что нету ):'
                openGraph={{
                    images: [
                        {
                            url: '/static/logo-small.svg',
                            width: 226,
                            height: 226,
                            type: 'image/png',
                        }
                    ]
                }}
            />
            {props.children}
        </main>
    )
}
