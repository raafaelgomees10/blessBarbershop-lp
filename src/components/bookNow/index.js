import React from 'react';
import * as S from './styles';
import Button2 from '../buttons/button2';

const BookNow = () => {
    return (
        <S.Section>
            <S.Title data-aos="fade-up" data-aos-duration="300">
                Book your Appointment Online.
            </S.Title>
            <S.Text data-aos="fade-up" data-aos-duration="800">
                Get 20% Discount on your first hair cut by using our website.
            </S.Text>
            <Button2 data-aos="fade-up" data-aos-duration="1000">
                Book Now
            </Button2>
        </S.Section>
    );
};

export default BookNow;
