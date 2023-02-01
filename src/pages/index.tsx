import { NextPage } from 'next'
import { PageProps } from './_app'
import { Button } from 'src/components/Button'

const Index: NextPage<PageProps> = () => {
    return (
        <>
            index page

            <Button>
                with button
            </Button>
        </>
    )
}

export default Index