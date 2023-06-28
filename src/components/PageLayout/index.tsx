import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Footer } from '../Footer'
import { Header } from '../Header'

// this shit causes hydaration missmatch but idk how to render it only client-side
import dynamic from 'next/dynamic'
const TimePadScript = dynamic(
    () => import('../TimePad').then(x => x.TimePad),
    // { ssr: false },
)

export const PageLayout: React.FC<any> = props => {
    const router = useRouter()
    const isPage2023 = router.pathname == '/2023'
    const isPage2022 = router.pathname == '/2022'
    const isPageTeam = router.pathname == '/team'
    const isPageVol = router.pathname == '/volunteers'
    const isPageContest = router.pathname == '/contest'

    const isBgYellow = isPage2023 || isPageContest
    const isBgBlue = isPageVol || isPageTeam
    return (
        <main style={{
            position: 'relative',
            minHeight: '100vh',
        }}>
            <TimePadScript />
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
                            url: '/logo.png',
                            width: 106,
                            height: 105,
                            type: 'image/png',
                        }
                    ]
                }}
            />

            <style>{`
                ${isBgBlue && `
                    body {
                        background-color: var(--color-blue);
                    }
                `},
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
