import s from './index.module.css'
import React from 'react'

import vhs from '../../Hero/vhs.module.css'
import { Button } from 'src/components/Button'

export const VolunteerButton: React.FC<any> = ({ openModal }) => {
    return (
        <>
            <div
                className={s.container}
            >
                <div className={s.wrapper}>
                    <Button
                        theme='primary'
                        className={vhs.abberationBlock}
                        onClick={openModal}
                    >
                        зарегистрироваться
                    </Button>
                </div>
            </div>
        </>
    )
}