import s from './index.module.css'
import React from 'react'
import Collapse, { Panel } from 'rc-collapse'
import vhs from '../Hero/vhs.module.css'
import { Button } from '../Button'

import 'rc-collapse/assets/index.css'

export const Programm: React.FC<any> = () => {
    return (
        <>
            <div
                className={s.container}
            >
                <div className={s.wrapper}>
                    <div>
                        <h2 className={s.h2}
                            style={{
                                fontSize: '3rem',
                                textAlign: 'center',
                                paddingBottom: '2rem',
                            }}
                        >
                            ЛЕКТОРИЙ
                        </h2>
                        <div
                            style={{
                                textAlign: 'center',
                                paddingBottom: '2rem',
                            }}
                        >
                            лекции, воркшопы, дикусии<br />
                            архитектура и город, культура и искусство, настоящее и будущее
                        </div>
                    </div>

                    <Collapse
                        accordion={true}
                        className={s.collapse}
                    >
                        <Panel header='СЦЕНА'
                            className={s.panel}
                            headerClass={s.panelHeder}
                        >
                            <div className={s.text}>
                                <div>секция</div>
                                <span className={s.h2}>
                                    cовременная проектная культура
                                </span>
                                <div>
                                    темы
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexFlow: 'column',
                                    textAlign: 'left',
                                    gap: '.5rem',
                                }}>
                                    <div>
                                        Архитектурное знание
                                    </div>
                                    <div>
                                        Природоподобные технололгии
                                    </div>
                                    <div>
                                        Устойчивость и прогнозирование
                                    </div>
                                </div>
                            </div>
                        </Panel>

                        <Panel header='ЛЕСНАЯ ПАНЕЛЬ'
                            className={s.panel}
                            headerClass={s.panelHeder}
                        >
                            <div className={s.text}>
                                <div>секция</div>
                                <span className={s.h2}>
                                    актуальный ландшафт проектирования
                                </span>
                                <div>
                                    темы
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexFlow: 'column',
                                    textAlign: 'left',
                                    gap: '.5rem',
                                }}>
                                    <div>
                                        Быть архитектором
                                    </div>
                                    <div>
                                        Как изменился образ деятельности
                                    </div>
                                    <div>
                                        Работа в неопределенности (и с)
                                    </div>
                                </div>
                            </div>
                        </Panel>

                        <Panel header='ЛЕСНОЙ КРУЖОК'
                            className={s.panel}
                            headerClass={s.panelHeder}
                        >
                            <div className={s.text}>
                                <div>секция</div>
                                <span className={s.h2}>
                                    искусство - это как?
                                </span>
                                <div>
                                    темы
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexFlow: 'column',
                                    textAlign: 'left',
                                    gap: '.5rem',
                                }}>
                                    <div>
                                        Как понимать искусство
                                    </div>
                                    <div>
                                        Реагировать на измененную реальность
                                    </div>
                                    <div>
                                        Спекуляция или профанация
                                    </div>
                                    <div>
                                        Настроиться на уровень леса, шума
                                    </div>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>

                    <Button
                        className={vhs.abberationBlock}
                        download
                        downloadHref='/static/Лекторий-unit-натихом.pdf'
                        style={{
                            margin: '2rem 0',
                            maxWidth: 500,
                            width: '100%',
                            alignSelf: 'center',
                        }}
                    >
                        СКАЧАТЬ подробное описание
                    </Button>
                </div>
            </div>
        </>
    )
}