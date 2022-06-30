import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { PageLayout } from 'src/components/PageLayout'
import React, { useState } from 'react'
import { Modal } from 'src/components/Modal'

interface PageProps {

}

const Index: NextPage<PageProps> = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <PageLayout
            openModal={() => setModalIsOpen(true)}
        >
            <Modal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            />

            <Hero
                openModal={() => setModalIsOpen(true)}
            />
            {/* <Programm />
            <People />
            <Participation
                openModal={() => setModalIsOpen(true)}
            /> */}
        </PageLayout>
    )
}

export default Index