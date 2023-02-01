import s from './styles.module.css'

import ReactModal from 'react-modal'
import { JoinForm } from '../JoinForm'
import { VolunteerForm } from '../VolunteerForm'
import { useContext } from 'react'
import { ModalContext } from 'src/context/modal'


export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    tag?: string
}> = ({ tag = 'default' }) => {
    const { modalState, setModalState } = useContext(ModalContext)
    const delay = 250

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
            <>
                {/* {tag == 'default' && (
                    <JoinForm
                        setModalIsOpen={setModalIsOpen}
                    />
                )}
                {tag == 'volunteers' && (
                    <VolunteerForm
                        setModalIsOpen={setModalIsOpen}
                    />
                )} */}
            </>
        </ReactModal>
    )
}