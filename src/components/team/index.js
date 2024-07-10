import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Team = () => {
    const members = [
        {
            name: 'Luke Santos',
            image: 'member1',
        },
        {
            name: 'Carla Couto',
            image: 'member2',
        },
        {
            name: 'Roy Gomes',
            image: 'member3',
        },
        {
            name: 'Jhon Molloy',
            image: 'member4',
        },
    ];
    return (
        <S.Section id="team">
            <S.Title className="sectionTitle">
                TEAM
                <span>Team</span>
            </S.Title>

            <S.Content className="customSlide">
                <Splide
                    options={{
                        rewind: false,
                        perPage: 3,
                        perMove: 1,
                        focus: 'center',
                        omitEnd: true,
                        type: 'loop',
                        gap: '1rem',
                        autoScroll: {
                            speed: 0.7,
                        },
                        breakpoints: {
                            767: {
                                gap: '4rem',
                                perPage: 1,
                                pagination: false,
                            },

                            1199: {
                                perPage: 3,
                                gap: '3rem',
                            },
                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    {members.map((member) => (
                        <SplideSlide key={member.name}>
                            <S.Member>
                                <S.ImageContainer
                                    className={`${member.image} image-container`}
                                >
                                    <Image
                                        width={310}
                                        height={440}
                                        src={`/images/${member.image}.webp`}
                                        alt={`Member ${member.name}`}
                                    />
                                </S.ImageContainer>
                                <S.Name className="name">
                                    <span>{member.name}</span>
                                </S.Name>
                            </S.Member>
                        </SplideSlide>
                    ))}
                </Splide>
            </S.Content>
        </S.Section>
    );
};

export default Team;
