import s from './styles.module.css'

import ReactModal from 'react-modal'
import { JoinForm } from '../JoinForm'
import { VolunteerForm } from '../Volunteers/VolunteerForm'


export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
    tag?: string
}> = ({ modalIsOpen, setModalIsOpen, tag = 'default' }) => {
    const delay = 250

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            closeTimeoutMS={delay}
            className={s.modal}
            overlayClassName={s.overlay}
            ariaHideApp={false}
        >
            <>
                {tag == 'default' && (
                    <JoinForm
                        setModalIsOpen={setModalIsOpen}
                    />
                )}
                {tag == 'volunteers' && (
                    <VolunteerForm
                        setModalIsOpen={setModalIsOpen}
                    />
                )}
            </>
        </ReactModal>
    )
}