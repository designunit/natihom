import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const PageLayout: React.FC<any> = props => {
    const router = useRouter()
    const isPage2023 = router.pathname == '/2023'
    const isPage2022 = router.pathname == '/2022'
    const isPageTeam = router.pathname == '/team'

    const isBgYellow = isPage2023 || isPageTeam
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
                ${isBgYellow && `
                    body {
                        background-color: var(--color-yellow);
                    }
                `},
                ${isPage2022 && `
                    body {
                        background-color: var(--color-red);
                    }
                `},
            `}</style>

            <Header />
            {props.children}
            <Footer />
        </main>
    )
}
