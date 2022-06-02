import s from './index.module.css'
import vhs from './vhs.module.css'
import { Button } from '../Button'
import React from 'react'
import Image from 'next/image'
import hero from '/public/static/hero.jpg'
import logo from '/public/static/logo.svg'
import unitlogo from '/public/static/unitlogo.svg'

export const Hero: React.FC<any> = ({ openModal }) => {
    return (
        <>
            <Image
                src={hero}
                alt=''
                layout='fill'
                objectFit='cover'
                priority
                loading='eager'
                quality={100}
                className={s.bg}
            />

            <div className={vhs.scanlines} />

            <div
                className={s.container}
            >
                <div
                    className={s.content}
                >
                    <div className={s.logo}>
                        <Image
                            src={logo}
                            alt=''
                            quality={100}
                            className={vhs.abberation}
                        />
                    </div>
                    <div className={s.about}>
                        <p>
                            трёхдневная лесная резиденция<br />
                            архитекторов, дизайнеров<br />
                            и всех причастных к городской культуре
                        </p>
                    </div>
                    {/* <div className={s.logos}>
                        <Image
                            src={unitlogo}
                            alt=''
                            quality={100}
                        />
                        <Image
                            src={unitlogo}
                            alt=''
                            quality={100}
                        />
                        <Image
                            src={unitlogo}
                            alt=''
                            quality={100}
                        />
                        <Image
                            src={unitlogo}
                            alt=''
                            quality={100}
                        />
                    </div> */}

                    <div className={s.text}>
                        <p>
                            Мы <a href='https://unit4.io/'>unit4.io</a> — занимаемся комплексными средовыми проектами в разных масштабах: от урны до мастерплана. Идея резиденции возникла из всеобщего запроса на поиск смыслов, расширение экосистемы профессионального сообщества в непривычном формате и средовом окружении: леса и палаточного лагеря.
                        </p>
                        <p>
                            Мы запустили проектную лабораторию и со студентами готовим инфраструктуру резиденции. Берег озера, лекции и дискуссии об архитектуре и урбанистике, культуре и искусстве, настоящем и будущем, музыка, танцы, арт, фудкорт, чиллзона, рассвет и закат.
                        </p>
                        <p>
                            Предлагаем отойти от городской суеты и шума, иллюзорности и мимолетности происходящего в своем повседневном и профессиональном. Восстав против суеты и инфляции смыслов, мы готовы пойти в новое, медленное и тихое.
                        </p>
                        <p>
                            Встретимся на Тихом
                        </p>
                        <div className={s.buttons}>
                            <Button
                                className={vhs.abberationBlock}
                                download
                            >
                                скачать презентацию
                            </Button>
                            <Button
                                theme='primary'
                                className={vhs.abberationBlock}
                                onClick={openModal}
                            >
                                зарегитстрироваться
                            </Button>
                        </div>
                    </div>
                    <div />
                    <div className={s.contacts}>
                        <div>
                            по вопросам сотрудничества: <a href='mailto:natihom@unit4.io'>natihom@unit4.io</a>
                        </div>
                        <div>
                            {'координатор резиденции:\n'}
                            Ермолаева Валентина <a href="mailto:ve@unit4.io">ve@unit4.io</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}