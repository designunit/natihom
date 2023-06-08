import s from './styles.module.css'

import ReactModal from 'react-modal'
import { VolunteerForm } from '../VolunteerForm'
import { useContext, useEffect } from 'react'
import { ModalContext } from 'src/context/modal'
import Script from 'next/script'


export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<any> = () => {
    const { modalState, setModalState } = useContext(ModalContext)
    const delay = 250

    useEffect(() => {
        if (!document) return
        document.body.style.overflow = modalState.modalIsOpen ? 'hidden' : 'unset'
    }, [modalState.modalIsOpen])

    if (!modalState.modalIsOpen) return null

    return (
        <ReactModal
            isOpen={modalState.modalIsOpen}
            onRequestClose={() => setModalState(false)}
            closeTimeoutMS={delay}
            className={s.modal}
            overlayClassName={s.overlay}
            ariaHideApp={false}
        >
            {console.log(modalState.tag)}
            <>
                {modalState.tag == 'default' && (
                    <>
                        <Script
                            id='timepad-script'
                            charSet='UTF-8'
                            strategy='afterInteractive'

                            data-timepad-customized="186656"
                            data-timepad-widget-v2="event_register"
                            src="https://timepad.ru/js/tpwf/loader/min/loader.js"

                            data-twf2s-event--id='2077224'
                        >
                            {`(function { return {
                                "initialRoute": "button",
                            }})()`}
                        </Script>
                    </>
                )}
                {modalState.tag == 'volunteers' && (
                    <VolunteerForm />
                )}
            </>
        </ReactModal>
    )
}