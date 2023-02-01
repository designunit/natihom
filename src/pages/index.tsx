import { NextPage } from 'next'
import { Button } from 'src/components/Button'
import { Section } from 'src/components/Section'
import { Flex } from 'src/components/Flex'

const Index: NextPage = () => {
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
            <Section bg>
                TEST
                TEST
                TEST
                TEST
                TEST
                TEST
                TEST
                TEST
            </Section>
            <Section>
                content next to TestSection
            </Section>
            <Section>
                <Flex>
                    {[1, 2, 3].map(x => (
                        <div>
                            {x}
                        </div>
                    ))}
                </Flex>
            </Section>
            <div style={{
                height: 10000,
            }} />
        </>
    )
}

export default Index