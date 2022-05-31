import s from './styles.module.css'
import Image from 'next/image'
import React from 'react'
import { Article } from '../Article'
import { Section } from '../Section'
import { Title } from '../Title'

export const News: React.FC<{ data: any }> = ({ data }) => (
    <div>
        {data.map((x, i) => (
            <Section
                key={i}
                className={s.section}
            >
                <div className={s.head}>
                    <Title level={4} style={{
                        marginLeft: '.15rem',
                        color: 'var(--color-blue-dark)',
                        fontWeight: 'bold',
                    }}>
                        date
                    </Title>
                    <Title level={2}>
                        {x.primary.title?.[0]?.text ?? ''}
                    </Title>
                </div>
                <div className={s.container}>
                    <div className={s.picture}>
                        <Image
                            src={x.primary.image?.url ?? '/static/unit.jpg'}
                            {...x.primary.image?.dimensions ?? { width: 1590, height: 307 }}
                            alt={x.primary.image?.alt ?? ''}
                        />
                    </div>
                    <div className={s.text}>
                        <Article>
                            content
                        </Article>
                    </div>
                </div>
            </Section>
        ))}
    </div>
)
