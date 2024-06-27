import React from 'react';
import Icon from '../icons';
import * as S from './styles';
import Header from '../header';

const HomeBless = () => {
    return (
        <S.Section id="home">
            <Header />
            <S.Content>
                <S.Title>BLESS Barbershop</S.Title>
                <S.SubTitle>Expert Haircuts and Grooming Services</S.SubTitle>
                <S.Text>
                    At The Finest Barbershop, we offer a wide range of professional hair
                    cutting and grooming services. Our experienced barbers use the latest
                    techniques and tools to give you the perfect look. Whether you are in
                    need of a classic haircut, straight razor shave, or beard trim, we
                    have got you covered.
                </S.Text>
                <S.Button>Book a haircut</S.Button>

                <S.Social>
                    <div>
                        <Icon icon="tiktok" height="24px" width="24px" />
                    </div>
                    <div>
                        <Icon icon="facebook" height="24px" width="24px" />
                    </div>
                </S.Social>
            </S.Content>
        </S.Section>
    );
};

export default HomeBless;
