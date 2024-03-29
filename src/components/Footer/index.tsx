import s from './index.module.css'
import React from 'react'
import { Button } from '../Button'
import Link from 'next/link'
import { Flex } from '../Flex'
import { Section } from '../Section'
import { useMobile } from 'src/hooks/useMobile'

export const Footer: React.FC<any> = () => {
    const isMobile = useMobile()
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
                            продюсер резиденции: Ермолаева Валентина <Link href='mailto:ve@unit4.io'>ve@unit4.io</Link>
                        </div>
                    </Flex>
                    <Flex col>
                        <div>
                            © UNIT4 {isMobile && (<br />)} 2023
                        </div>
                        <div>
                            Design by {isMobile && (<br />)} <Link href={'http://serjbaryshev.com/'}>Serge b.</Link>
                        </div>
                        <div>
                            website by {isMobile && (<br />)} manhir
                        </div>
                    </Flex>
                </Flex>
            </Section>
        </footer>
    )
}