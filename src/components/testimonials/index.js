import React from 'react';
import Icon from '../icons';
import * as S from './styles';
import Image from 'next/image';
import useMedia from '@/hooks/useMedia';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Testimonials = () => {
    const mobile = useMedia('(max-width:767px)');

    const testmonials = [
        {
            name: 'Luke Belling',
            image: 'client1',
            text: "I've always struggled to find a barber who understands my style. Since discovering Bless Barbershop, I haven't gone anywhere else! Impeccable service and a super welcoming atmosphere",
        },
        {
            name: 'Davies Martin',
            image: 'client2',
            text: "I love the relaxed atmosphere and the barbers' skills. I always leave satisfied with a perfect cut. Best barbershop in town, without a doubt!",
        },
        {
            name: 'Nicky Shaw',
            image: 'client3',
            text: 'The team is extremely professional and attentive. Every visit is a unique and pleasant experience. I highly recommend it to anyone looking for the perfect haircut',
        },
        {
            name: 'Bryan James',
            image: 'client4',
            text: "Absolutely top-notch service! The barbers here are wizards with scissors. I've been coming here for years, and they never disappoint. Highly recommend!",
        },
    ];

    return (
        <S.Section id="Testimonials">
            <S.Container>
                <S.Title className="sectionTitle">
                    Testimonials
                    <span>Testimonials</span>
                </S.Title>

                <S.Box data-aos="zoom-out" data-aos-duration="1500">
                    <S.Text>What Our Clients Say</S.Text>
                    <S.Descrpition>
                        See what our satisfied customers have to say about our services.
                        Their opinion is fundamental to our growth and excellence.
                    </S.Descrpition>
                </S.Box>

                <S.Content className="customSlide">
                    <Splide
                        options={{
                            rewind: false,
                            perPage: 3,
                            perMove: 1,
                            gap: '40rem',
                            // autoplay: true,
                            focus: 'center',
                            omitEnd: true,
                            type: 'loop',
                            breakpoints: {
                                767: {
                                    gap: '2rem',
                                    perPage: 1,
                                },

                                1199: {
                                    perPage: 1,
                                    gap: '2rem',
                                },
                                1366: {
                                    gap: '40rem',
                                },

                                1920: {
                                    gap: '4rem',
                                },
                            },
                        }}
                    >
                        {testmonials.map((client) => (
                            <SplideSlide key={client.name}>
                                <S.Card>
                                    <Image
                                        width={!mobile ? 80 : 60}
                                        height={!mobile ? 80 : 60}
                                        src={`/images/${client.image}.webp`}
                                        alt="haircuting photos"
                                    />
                                    <S.ClientInfo>
                                        <Icon
                                            icon="quote"
                                            width={!mobile ? '30px' : '22px'}
                                            height={!mobile ? '21px' : '18px'}
                                        />
                                        <S.ClientText>{client.text}</S.ClientText>
                                        <Icon
                                            icon="quote"
                                            width={!mobile ? '30px' : '22px'}
                                            height={!mobile ? '21px' : '18px'}
                                        />
                                        <S.ClientName>{client.name}</S.ClientName>
                                    </S.ClientInfo>
                                </S.Card>
                            </SplideSlide>
                        ))}
                    </Splide>
                </S.Content>
            </S.Container>
        </S.Section>
    );
};

export default Testimonials;
