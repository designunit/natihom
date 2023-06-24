import { Flex } from '../Flex'
import { Title } from '../Title'
import s from './index.module.css'

const skipIndex = 4

export const Roadmap = ({ data }) => (
    <Flex col
        style={{
            gap: 0,
        }}
    >
        {data.map((x, i) => {
            const isSide = i % 2 == 0
            return (
                <>
                    <Flex
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            flexDirection: isSide ? 'row' : 'row-reverse',
                        }}
                    >
                        <Flex col
                            style={{
                                flex: '0 0 40%',
                                textAlign: isSide ? 'right' : 'left',
                            }}
                            className={s.itemFlex}
                        >
                            <Title level={3}>
                                {x.title}
                            </Title>
                            {x.text}
                        </Flex>
                        <div style={{
                            flex: '0 0 175px',
                            position: 'relative',
                        }}>
                            <div style={{ // center
                                position: 'absolute',
                                left: 'calc(50% + 1px)',
                                top: 0,
                                bottom: 0,
                                borderLeft: 'solid 1px black'
                            }} />
                            <div style={{ // horizontal
                                position: 'absolute',
                                width: '50%',
                                left: `calc(${isSide ? '0%' : '50%'} + 1px)`,
                                top: 'calc(50% - 1px)',
                                borderBottom: 'solid 1px black'
                            }} />
                            <div style={{ // side
                                position: 'absolute',
                                left: `calc(${isSide ? '0%' : '100%'} + 1px)`,
                                top: 0,
                                bottom: 0,
                                borderLeft: 'solid 1px black'
                            }} />
                        </div>
                        <div style={{
                            flex: '0 0 40%',
                        }} />
                    </Flex>
                    {i == skipIndex && (
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