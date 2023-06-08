import { NextPage } from 'next'
import React, { useState } from 'react'
import { Modal } from 'src/components/Modal'
import { PageVolunteers } from 'src/components/PageVolunteers'

const Page: NextPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <PageVolunteers />
            <Modal />
        </>
    )
}

export default Page