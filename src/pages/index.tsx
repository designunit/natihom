import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { PageLayout } from 'src/components/PageLayout'
import { Modal } from 'src/components/Modal'
import { Participation } from 'src/components/Participation'
import { People } from 'src/components/People'
import { Programm } from 'src/components/Programm'
import { Schedule } from 'src/components/Schedule'
import { Fancy } from 'src/components/Fancy'
import { Road } from 'src/components/Road'
import { Party } from 'src/components/Party'
import { PageProps } from './_app'

const Index: NextPage<PageProps> = ({ modalState, setModalState }) => {
    return (
        <>
            index page
        </>
    )
}

export default Index