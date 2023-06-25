import { createContext, Dispatch, SetStateAction } from 'react'

export type ModalStateType = {
    modalIsOpen: boolean,
    tag: 'default' | 'volunteers' | 'contest'
}

export type ModalContextType = {
    modalState: ModalStateType
    setModalState: Dispatch<SetStateAction<ModalStateType | boolean>>
}

export const ModalContext = createContext<ModalContextType>({
    modalState: {
        modalIsOpen: false,
        tag: 'default',
    },
    setModalState: () => null,
})
