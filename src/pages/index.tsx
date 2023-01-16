import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { PageLayout } from 'src/components/PageLayout'
import React, { useState } from 'react'
import { Modal } from 'src/components/Modal'
import { Participation } from 'src/components/Participation'
import { People } from 'src/components/People'
import { Programm } from 'src/components/Programm'
import { Schedule } from 'src/components/Schedule'
import { Fancy } from 'src/components/Fancy'
import { Road } from 'src/components/Road'
import { Party } from 'src/components/Party'

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
            <Fancy />
            <Schedule />
            <Programm />
            <Party />

            {/* <People /> */}
            <Participation
                openModal={() => setModalIsOpen(true)}
            />

            {/* <Road /> */}
            
        </PageLayout>
    )
}

export default Index