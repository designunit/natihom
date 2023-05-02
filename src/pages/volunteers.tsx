import { NextPage } from 'next'
import React, { useState } from 'react'
import { Modal } from 'src/components/Modal'
import { VolunteerPage } from 'src/components/VolunteerPage'

const Page: NextPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <VolunteerPage
                onClick={() => setModalIsOpen(true)}
            />
            <Modal
                tag='volunteers'
            />
        </>
    )
}

export default Page