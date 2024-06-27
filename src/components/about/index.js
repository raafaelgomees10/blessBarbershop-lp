import React from 'react';
import * as S from './styles';
import Image from 'next/image';

const About = () => {
    return (
        <S.Section id="about">
            <S.Container>
                <Image
                    width={375}
                    height={453}
                    src="/images/fotos.png"
                    alt="haircuting photos"
                />
                <S.Content>
                    <S.Title className="title">
                        About Us
                        <span>About</span>
                    </S.Title>
                    <S.SubTitle>Best Haircut Salon</S.SubTitle>
                    <S.Text>
                        Let your hairdressers do their amazing job. Trim the hair to get
                        your desired look. Book appointment with us for your favorite hair
                        Styles!
                    </S.Text>
                    <S.Button>Read More</S.Button>
                </S.Content>
            </S.Container>
            <Image
                width={780}
                height={367}
                src="/images/about-shape.webp"
                alt="haircuting photos"
            />
        </S.Section>
    );
};

export default About;
