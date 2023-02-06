import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const PageLayout: React.FC<any> = props => {
    const router = useRouter()
    const isPage2023 = router.pathname == '/2023'
    return (
        <main style={{
            position: 'relative',
            minHeight: '100vh',
        }}>
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
                            url: '/static/logo-small.png',
                            width: 283,
                            height: 283,
                            type: 'image/png',
                        }
                    ]
                }}
            />
            
            <style>{`
                ${isPage2023 && `
                    body {
                        background-color: var(--color-yellow);
                    }
                `},
            `}</style>

            <Header />
            {props.children}
            <Footer />
        </main>
    )
}
