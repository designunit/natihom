import 'src/style.css'
import 'src/react-modal.css'

import { ControlsContext } from 'src/context/controls'
import { AppType } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import { PageLayout } from 'src/components/PageLayout'
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Modal } from 'src/components/Modal'
import { ModalContext, ModalStateType } from 'src/context/modal'

export type PageProps = {
    modalState: boolean
    setModalState: Dispatch<SetStateAction<boolean>>
}

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

    const props = {
        ...pageProps,
        modalState, setModalState,
    }

    return (
        <ControlsContext.Provider
            value={{
                shape: 'default',
                size: 'default',
            }}
        >
            <Head>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="https://natihom.unit4.io/static/logo-small.png" />
                <link rel="icon" href="/legacy/logo-small.svg" type="image/svg+xml"></link>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, maximum-scale=1.0'
                />
            </Head>

            <ModalContext.Provider value={{ modalState, setModalState }}>
                <PageLayout>
                    <Modal />
                    <Component {...props} />
                </PageLayout>
            </ModalContext.Provider>
        </ControlsContext.Provider>
    )
}

export default App
