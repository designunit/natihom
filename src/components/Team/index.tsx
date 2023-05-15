import React from 'react'
import s from './index.module.css'
import { Flex } from '../Flex'
import { Section } from '../Section'
import Image from 'next/image'

const Team: React.FC<{ data: any[] }> = ({ data }) => (
    <Section
        className={s.section}
    >
        <Flex className={s.flex}>
            {data.map((x, i) => (
                <Flex className={s.item} key={i}>
                    <div className={s.name}>
                        {x.name}
                    </div>
                    <div className={s.imgContainer}>
                        <Image
                            className={s.img}
                            src={x.image}
                            alt=''
                            fill
                        />
                    </div>
                    <div className={s.description}>
                        {x.description}
                    </div>
                </Flex>
            ))}
        </Flex>
    </Section>
)

export default Team