import { NextPage } from 'next'
import { PageProps } from './_app'
import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'

const Index: NextPage<PageProps> = () => {
    return (
        <>
            <Section>
                index page
            </Section>
            <Section>
                <Button>
                    with button
                </Button>
            </Section>
        </>
    )
}

export default Index