import s from './index.module.css'
import React from 'react'
import { Button } from 'src/components/Button'
import { Title } from 'src/components/Title'

export const VolunteerWeOpen: React.FC<any> = () => {
    return (
        <>
            <div
                className={s.container}
            >
                <div className={s.wrapper}>

                    <Title level={2}>
                        Мы всегда открыты<br />предложениям и идеям!
                    </Title>

                    <div className={s.flex}>
                        <div className={s.textlist}>
                            <p>
                                Если вы горите желанием сделать нечто новое и прекрасное в рамках фестиваля, у вас есть сформированная идея, единомышленники и подробный план претворения этой идеи в жизнь — мы будем рады видеть вас!
                            </p>
                            <p>
                                Что мы ищем: проекты в области современного искусства и архитектуры, перформанс, арт-объекты и другие визуальные проекты.
                            </p>
                        </div>
                    </div>

                    <Button
                        type='submit'
                        theme='default'
                        href='https://docs.google.com/forms/d/e/1FAIpQLSc1UvMOiBde0M4l6biyugx5uDP_sOOOWHBHybiXDDhnUfEBHQ/viewform?usp=sf_link'
                        style={{
                            borderColor: 'black',
                        }}
                    >
                        АНКЕТА
                    </Button>
                </div>
            </div>
        </>
    )
}