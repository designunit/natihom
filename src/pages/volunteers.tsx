import { NextPage } from 'next'
import { PageLayout } from 'src/components/PageLayout'
import React, { useState } from 'react'
import { Modal } from 'src/components/Modal'
import { VolunteerTypes } from 'src/components/Volunteers/VolunteerTypes'
import { VolunteerHero } from 'src/components/Volunteers/VolunteerHero'
import { VolunteerWeOpen } from 'src/components/Volunteers/VolunteerWeOpen'


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
                tag='volunteers'
            />

            <VolunteerHero
                openModal={() => setModalIsOpen(true)}
            />
            {/* <VolunteerText /> */}
            <VolunteerTypes
                openModal={() => setModalIsOpen(true)}
            />
            <VolunteerWeOpen />


        </PageLayout>
    )
}

export default Index