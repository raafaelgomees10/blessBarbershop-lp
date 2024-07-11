import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import useMedia from '@/hooks/useMedia';
import Button1 from '../buttons/button1';

const About = () => {
    const mobile = useMedia('(max-width:767px)');

    return (
        <S.Section id="about">
            <S.Container>
                <Image
                    width={!mobile ? 375 : 325}
                    height={!mobile ? 453 : 375}
                    src="/images/fotos.png"
                    alt="hair cutting photos"
                />
                <S.Content>
                    <S.Title className="sectionTitle">
                        About
                        <span>About Us</span>
                    </S.Title>
                    <S.SubTitle className="sectionSubTitle">
                        Best Haircut Salon
                    </S.SubTitle>
                    <S.Text>
                        Welcome to Bless, where tradition and modernity blend to offer the
                        finest grooming experience. Since 2010, we have proudly served the
                        community with a commitment to excellence, focusing on quality and
                        attention to detail. Our team of professional barbers is
                        passionate about their craft, ensuring that every client receives
                        personalized service and leaves satisfied with a refreshed look.
                        We believe that a well-groomed beard and a perfect haircut are
                        more than just appearance they are an expression of style and
                        confidence.
                    </S.Text>
                    <Button1 margin={!mobile ? '48px 0 80px' : '40px 0 48px'}>
                        Read More
                    </Button1>
                </S.Content>
            </S.Container>

            <Image
                width={!mobile ? 780 : 375}
                height={!mobile ? 367 : 171}
                src="/images/about-shape.webp"
                alt="hair cutting tools"
            />
        </S.Section>
    );
};

export default About;
