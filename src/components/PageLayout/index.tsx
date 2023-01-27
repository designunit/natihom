import { NextSeo } from 'next-seo'

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
            {props.children}
        </main>
    )
}
