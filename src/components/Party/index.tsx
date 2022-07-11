import s from './index.module.css'
import React from 'react'
import classNames from 'classnames'

const data1 = [
    {
        name: '17:00',
        style: 'power electronics, noise, ritual',
        event: 'BARKAL',
    },
    {
        name: '18:00',
        style: 'therapeutic noise, harsh power electric, non linear sonic narrative',
        event: 'DRKBLCK',
    },
    {
        name: '19:00',
        style: 'еxperimental, рsychedelic, improvisation, noise, r.o.t.s.',
        event: 'LE BEAU SERGE',
    },
]

const data2 = [
    // {
    //     name: '22:00',
    //     style: 'ambient & drone',
    //     event: 'Stepan Rozenberg',
    // },
    {
        name: '23:00',
        style: 'fanny staff & speed geredj',
        event: 'Dj Countryman',
    },
    {
        name: '00:00',
        style: 'potpourri',
        event: 'Low Priority',
    },
    {
        name: '01:00',
        style: 'pogroove, black disco, afrobit, reggie, brokenbit, hip-hop, deep house',
        event: 'Derun',
    },
    {
        name: '02:00',
        style: 'experimental four on the floor, live rhythm research, triokorgo timbre',
        event: 'Ply Tone',
    },
    {
        name: '03:00 - 04:00',
        style: 'are grooves, vintage psychedelic, limited edition fresh',
        event: 'MR. GUYVER',
    }
]

const data3 = [
    {
        name: '14:00',
        style: 'tehno house, hip-hop',
        event: 'Clumsy',
    },
]

export const Party: React.FC<any> = ({ openModal }) => {
    return (
        <>
            <div
                className={s.container}
            >
                <div className={s.wrapper}>
                    <div>
                        <h2
                            className={classNames(s.h2, s.party)}
                            style={{
                                position: 'relative',
                                zIndex: 10,
                            }}
                        >
                            M U S I C
                        </h2>
                    </div>

                    <div>
                        <h2 className={s.h2}>
                            15 ИЮЛЯ<br />
                            {'experimental & NOISE'}
                        </h2>
                    </div>

                    <div
                        className={s.collapse}
                    >
                        {data1.map((x, i) => (
                            <div className={s.text} key={i}>
                                <div>
                                    {x.name}
                                </div>
                                <div
                                    style={{
                                        fontWeight: 'normal',
                                        fontSize: '1rem',
                                    }}
                                >
                                    {x.style}
                                </div>
                                <div>
                                    {x.event}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className={s.h2}>
                            16 ИЮЛЯ<br />
                            {'PARTY'}
                        </h2>
                    </div>

                    <div
                        className={s.collapse}
                    >
                        {data2.map((x, i) => (
                            <div className={s.text} key={i}>
                                <div>
                                    {x.name}
                                </div>
                                <div
                                    style={{
                                        fontWeight: 'normal',
                                        fontSize: '1rem',
                                    }}
                                >
                                    {x.style}
                                </div>
                                <div>
                                    {x.event}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className={s.h2}>
                            17 ИЮЛЯ<br />
                            {'last day'}
                        </h2>
                    </div>

                    <div
                        className={s.collapse}
                    >
                        {data3.map((x, i) => (
                            <div className={s.text} key={i}>
                                <div>
                                    {x.name}
                                </div>
                                <div
                                    style={{
                                        fontWeight: 'normal',
                                        fontSize: '1rem',
                                    }}
                                >
                                    {x.style}
                                </div>
                                <div>
                                    {x.event}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}