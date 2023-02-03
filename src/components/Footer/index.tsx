import s from './index.module.css'
import React from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { Flex } from '../Flex'
import { Section } from '../Section'

export const Footer: React.FC<any> = () => {
    return (
        <footer
            className={s.container}
        >
            <Section>
                <Flex>
                    <Flex col>
                        <div>
                            <b>Контакты:</b>
                        </div>
                        <div>
                            по вопросам сотрудничества: <Link href='mailto:natihom@unit4.io'>natihom@unit4.io</Link>
                        </div>
                        <div>
                            координатор резиденции: Ермолаева Валентина <Link href='mailto:ve@unit4.io'>ve@unit4.io</Link>
                        </div>
                    </Flex>
                    <Flex col>
                        <div>
                            © UNIT4 2023
                        </div>
                        <div>
                            Design by <Link href={'http://serjbaryshev.com/'}>Serge b.</Link>
                        </div>
                        <div>
                            website by manhir
                        </div>
                    </Flex>
                </Flex>
            </Section>
        </footer>
    )
}