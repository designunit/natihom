import { useMobile } from 'src/hooks/useMobile'
import { Flex } from '../Flex'
import { Title } from '../Title'
import s from './index.module.css'

const skipIndex = 4

export const Roadmap = ({ data }) => {
    const isMobile = useMobile()
    return (
        <Flex col
            style={{
                gap: 0,
            }}
        >
            {data.map((x, i) => {
                const isSide = i % 2 == 0
                const contentEl = (
                    <Flex col
                        style={{
                            flex: isMobile ? '1 1 100%' : '0 0 40%',
                            textAlign: isMobile ? 'left' : (isSide ? 'right' : 'left'),
                            ...(isMobile && {
                                marginBottom: '4rem',
                            })
                        }}
                        className={s.itemFlex}
                    >
                        <Title level={3}>
                            {x.title}
                        </Title>
                        {x.text}
                    </Flex>
                )
                return (
                    <>
                        <Flex
                            style={{
                                width: '100%',
                                justifyContent: isMobile ? 'flex-start' : 'center',
                                alignItems: 'stretch',
                                flexDirection: isSide || isMobile ? 'row' : 'row-reverse',
                                ...(isMobile && {
                                    gap: 0,
                                })
                            }}
                        >
                            {!isMobile && contentEl}
                            <div style={{
                                flex: `0 0 ${isMobile ? '40px' : '175px'}`,
                                position: 'relative',
                            }}>
                                <div style={{ // center
                                    position: 'absolute',
                                    left: 'calc(50% + 1px)',
                                    top: 0,
                                    bottom: isMobile ? `4rem` : 0,
                                    borderLeft: 'solid 1px black'
                                }} />
                                <div style={{ // horizontal
                                    position: 'absolute',
                                    width: '50%',
                                    left: `calc(${isSide || isMobile ? '0%' : '50%'} + 1px)`,
                                    top: isMobile ? 'calc(50% - 2rem)' : 'calc(50% - 1px)',
                                    borderBottom: 'solid 1px black'
                                }} />
                                <div style={{ // side
                                    position: 'absolute',
                                    left: `calc(${isSide || isMobile ? '0%' : '100%'} + 1px)`,
                                    top: 0,
                                    bottom: 0,
                                    borderLeft: 'solid 1px black'
                                }} />
                            </div>
                            {isMobile ? contentEl : (
                                <div style={{
                                    flex: '0 0 40%',
                                }} />
                            )}
                        </Flex>
                        {i == skipIndex && !isMobile && (
                            <Flex
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                }}
                            >
                                <div style={{
                                    minHeight: 400,
                                    flex: '0 0 175px',
                                    position: 'relative',
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: 'calc(50% + 1px)',
                                        top: 0,
                                        bottom: 0,
                                        borderLeft: 'solid 1px black'
                                    }} />
                                </div>
                            </Flex>
                        )}
                    </>
                )
            })}
        </Flex>
    )
} 