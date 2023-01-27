import { NextPage } from 'next'
import { PageLayout } from 'src/components/PageLayout'
import React, { useState } from 'react'
import { Modal } from 'src/components/Modal'
import { VolunteerTypes } from 'src/components/Volunteers/VolunteerTypes'
import { VolunteerHero } from 'src/components/Volunteers/VolunteerHero'

interface PageProps {

}

const Index: NextPage<PageProps> = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <PageLayout
            openModal={() => setModalIsOpen(true)}
        >
            <style>{`
                :root {
                    --color-green: #c94a2e;
                }
            `}</style>

            <Modal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                tag='volunteers'
            />

            <VolunteerHero
                openModal={() => setModalIsOpen(true)}
            />
            <VolunteerTypes
                openModal={() => setModalIsOpen(true)}
            />

        </PageLayout>
    )
}

export default Index