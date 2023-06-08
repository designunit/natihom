import 'src/style.css'
import 'src/react-modal.css'

import { AppType } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import { PageLayout } from 'src/components/PageLayout'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'src/components/Modal'
import { ModalContext, ModalStateType } from 'src/context/modal'
import { ParallaxProvider } from 'react-scroll-parallax'

const App: AppType = ({ Component, pageProps }) => {
    const router = useRouter()

    const [modalState, setModalState] = useState<ModalStateType>({
        modalIsOpen: false,
        tag: 'default',
    })
    const setModalIsOpen = useCallback(input => {
        if (typeof input == 'boolean') {
            setModalState({
                ...modalState,
                modalIsOpen: input,
            })
        }
        else {
            setModalState(input)
        }
    }, [])
    useEffect(() => {
        setModalIsOpen(false)
    }, [router.pathname])

    return (
        <>
            <Head>
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                <meta name="twitter:image" content="https://natihom.unit4.io/logo.png" />
                <link rel="icon" href="/logo.png"></link>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, maximum-scale=1.0'
                />
            </Head>

            <ModalContext.Provider value={{ modalState, setModalState }}>
                <ParallaxProvider>
                    <PageLayout>
                        <Modal />
                        <Component {...pageProps} />
                    </PageLayout>
                </ParallaxProvider>
            </ModalContext.Provider>
        </>
    )
}

export default App
