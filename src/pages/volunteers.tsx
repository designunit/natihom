import { NextPage } from 'next'
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
            <style>{`
                :root {
                    --color-green: #c94a2e;
                }
            `}</style>

            <Modal
                tag='volunteers'
            />

            {/* <VolunteerHero
                openModal={() => setModalIsOpen(true)}
            />
            <VolunteerTypes
                openModal={() => setModalIsOpen(true)}
            /> */}

        </PageLayout>
    )
}

export default Index