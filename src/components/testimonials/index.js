import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import Icon from '../icons';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const Testimonials = () => {
    return (
        <S.Section id="Testimonials">
            <S.Title>
                Testimonials
                <span>Testimonials</span>
            </S.Title>
            <S.Box>
                <S.Text>What Our Clients Say</S.Text>
                <S.Descrpition>
                    Let your hairdressers do their amazing job. Trim the hair to get your
                    desired look. Book appointment with us for your favorite hair Styles!
                </S.Descrpition>
            </S.Box>

            <S.Content>
                <Splide
                    options={{
                        rewind: false,
                        perPage: 3,
                        perMove: 1,
                        gap: '40rem',
                        autoplay: true,
                        focus: 'center',
                        omitEnd: true,
                        type: 'loop',
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
                >
                    <SplideSlide>
                        <S.Card>
                            <Image
                                width={80}
                                height={80}
                                src="/images/client1.jpg"
                                alt="haircuting photos"
                            />
                            <S.ClientInfo>
                                <Icon icon="quote" width="30px" height="21" />
                                <S.ClientText>
                                    Let your hairdressers do their amazing job. Trim the
                                    hair to get your desired look. Book appointment with
                                    us for your favorite hair Styles do their amazing job.
                                    Trim the hair to get your desired look. Book
                                    appointment with us for your
                                </S.ClientText>
                                <Icon icon="quote" width="30px" height="21" />

                                <S.ClientName>Rick Wright</S.ClientName>
                            </S.ClientInfo>
                        </S.Card>
                    </SplideSlide>
                    <SplideSlide>
                        <S.Card>
                            <Image
                                width={80}
                                height={80}
                                src="/images/client2.jpg"
                                alt="haircuting photos"
                            />
                            <S.ClientInfo>
                                <Icon icon="quote" width="30px" height="21" />
                                <S.ClientText>
                                    Let your hairdressers do their amazing job. Trim the
                                    hair to get your desired look. Book appointment with
                                    us for your favorite hair Styles do their amazing job.
                                    Trim the hair to get your desired look. Book
                                    appointment with us for your
                                </S.ClientText>
                                <Icon icon="quote" width="30px" height="21" />

                                <S.ClientName>Rick Wright</S.ClientName>
                            </S.ClientInfo>
                        </S.Card>
                    </SplideSlide>
                    <SplideSlide>
                        <S.Card>
                            <Image
                                width={80}
                                height={80}
                                src="/images/client3.jpg"
                                alt="haircuting photos"
                            />
                            <S.ClientInfo>
                                <Icon icon="quote" width="30px" height="21" />
                                <S.ClientText>
                                    Let your hairdressers do their amazing job. Trim the
                                    hair to get your desired look. Book appointment with
                                    us for your favorite hair Styles do their amazing job.
                                    Trim the hair to get your desired look. Book
                                    appointment with us for your
                                </S.ClientText>
                                <Icon icon="quote" width="30px" height="21" />

                                <S.ClientName>Rick Wright</S.ClientName>
                            </S.ClientInfo>
                        </S.Card>
                    </SplideSlide>
                    <SplideSlide>
                        <S.Card>
                            <Image
                                width={80}
                                height={80}
                                src="/images/client4.jpg"
                                alt="haircuting photos"
                            />
                            <S.ClientInfo>
                                <Icon icon="quote" width="30px" height="21" />
                                <S.ClientText>
                                    Let your hairdressers do their amazing job. Trim the
                                    hair to get your desired look. Book appointment with
                                    us for your favorite hair Styles do their amazing job.
                                    Trim the hair to get your desired look. Book
                                    appointment with us for your
                                </S.ClientText>
                                <Icon icon="quote" width="30px" height="21" />

                                <S.ClientName>Rick Wright</S.ClientName>
                            </S.ClientInfo>
                        </S.Card>
                    </SplideSlide>
                </Splide>
            </S.Content>
        </S.Section>
    );
};

export default Testimonials;
