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
        <main style={{ position: 'relative', marginBottom: '2rem' }}>
            <NextSeo
                title='Unit на тихом'
                description='
                    лесная резиденция для
                    архитекторов / дизайнеров / создающих / всех причастных к городской культуре.
                    Берег озера, лекции и дискуссии об архитектуре и урбанистике, культуре и искусстве, настоящем и будущем, музыка, танцы, арт, фудкорт, чиллзона, рассвет и закат.
                '
                openGraph={{
                    images: [
                        {
                            url: '/static/meta.jpeg',
                            width: 1280,
                            height: 641,
                            type: 'image/jpeg',
                        }
                    ]
                }}
            />
            {props.children}
        </main>
    )
}
