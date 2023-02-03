import { NextSeo } from 'next-seo'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const PageLayout: React.FC<any> = props => {
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
                            url: '/static/logo-small.png',
                            width: 283,
                            height: 283,
                            type: 'image/png',
                        }
                    ]
                }}
            />
            <Header />
            {props.children}
            <Footer />
        </main>
    )
}
