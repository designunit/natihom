import 'src/style.css'
import 'src/style/react-modal.css'

import { ControlsContext } from 'src/context/controls'
import { AppType } from 'next/dist/shared/lib/utils'
import Head from 'next/head'

const App: AppType = ({ Component, pageProps }) => {
    return (
        <ControlsContext.Provider
            value={{
                shape: 'default',
                size: 'default',
            }}
        >
            <Head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, maximum-scale=1.0'
                />
            </Head>

            <Component {...pageProps} />
        </ControlsContext.Provider>
    )
}

export default App
