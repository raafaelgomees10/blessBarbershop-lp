import React from 'react';
import * as S from './styles';
import Button2 from '../buttons/button2';

const BookNow = () => {
    return (
        <S.Section>
            <S.Title>Book your Appointment Online.</S.Title>
            <S.Text>Get 20% Discount on your first hair cut by using our website.</S.Text>
            <Button2>Book Now</Button2>
        </S.Section>
    );
};

export default BookNow;
