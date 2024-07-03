import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Team = () => {
    return (
        <S.Section id="team">
            <S.Title>
                TEAM
                <span>Team</span>
            </S.Title>
            <S.Content>
                <Splide
                    options={{
                        rewind: false,
                        perPage: 3,
                        perMove: 1,
                        focus: 0,
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
                    <SplideSlide>
                        <S.Member>
                            <S.ImageContainer className="member1">
                                <Image
                                    width={320}
                                    height={440}
                                    src="/images/lukaku.webp"
                                    alt="haircuting photos"
                                />
                            </S.ImageContainer>
                            <S.Name>
                                <span>Lukaku Santos</span>
                            </S.Name>
                        </S.Member>
                    </SplideSlide>
                    <SplideSlide>
                        <S.Member>
                            <S.ImageContainer className="member2">
                                <Image
                                    width={310}
                                    height={440}
                                    src="/images/carla.webp"
                                    alt="haircuting photos"
                                />
                            </S.ImageContainer>
                            <S.Name>
                                <span>Carla Couto</span>
                            </S.Name>
                        </S.Member>
                    </SplideSlide>

                    <SplideSlide>
                        <S.Member>
                            <S.ImageContainer className="member3">
                                <Image
                                    width={300}
                                    height={440}
                                    src="/images/wick.webp"
                                    alt="haircuting photos"
                                />
                            </S.ImageContainer>
                            <S.Name className="teamCaption">
                                <span>Jhon Wick</span>
                            </S.Name>
                        </S.Member>
                    </SplideSlide>

                    <SplideSlide>
                        <S.Member>
                            <S.ImageContainer className="member3">
                                <Image
                                    width={300}
                                    height={440}
                                    src="/images/jon.webp"
                                    alt="haircuting photos"
                                />
                            </S.ImageContainer>
                            <S.Name className="teamCaption">
                                <span>Jhon Wick</span>
                            </S.Name>
                        </S.Member>
                    </SplideSlide>
                </Splide>
            </S.Content>
        </S.Section>
    );
};

export default Team;
