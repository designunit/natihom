import s from './styles.module.css'

import ReactModal from 'react-modal'
import { Button } from '../Button'
import React, { useState } from 'react'
import { Title } from '../Title'
import { Article } from '../Article'
import { JoinForm } from '../JoinForm'


export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
}> = ({ modalIsOpen, setModalIsOpen }) => {
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
                <JoinForm 
                    setModalIsOpen={setModalIsOpen}
                />
            </>
        </ReactModal>
    )
}