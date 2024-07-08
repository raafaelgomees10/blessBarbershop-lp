import React, { useState } from 'react';
import * as S from './styles';

const Services = () => {
    const [serviceSelected, setServiceSelected] = useState('haircuts');

    const services = {
        haircuts: [
            { name: 'Regular Hair Cut', price: 32 },
            { name: 'Kids Hair Cut', price: 25 },
            { name: 'Hair Cut & Beard Trim', price: 45 },
            { name: 'Hair Cut & Wash', price: 38 },
            { name: 'Fade & Beard Trim', price: 45 },
            { name: 'Scissor Hair Cut', price: 32 },
            { name: 'Long Hair - Hair Cut', price: 40 },
            { name: 'Hair Cut & Shave', price: 50 },
            { name: 'Fade', price: 32 },
        ],
        beards: [
            { name: 'Classic Shave', price: 32 },
            { name: 'Beard Trim', price: 18 },
            { name: 'Royal Shave', price: 40 },
        ],
        extra: [
            { name: 'Face Massage', price: 20 },
            { name: "Men's Hair Color", price: 35 },
            { name: 'Line Up', price: 13 },
            { name: "Men's Hair Cut & Color", price: 55 },
        ],
    };

    return (
        <S.Section id="services">
            <S.Container>
                <S.Title>
                    Services
                    <span>Services</span>
                </S.Title>
                <nav>
                    <S.ServicesList>
                        <li
                            className={serviceSelected === 'haircuts' ? 'active' : ''}
                            onClick={() => setServiceSelected('haircuts')}
                        >
                            HAIRCUTS
                        </li>
                        <li
                            className={serviceSelected === 'beards' ? 'active' : ''}
                            onClick={() => setServiceSelected('beards')}
                        >
                            BEARDS & SHAVES
                        </li>
                        <li
                            className={serviceSelected === 'extra' ? 'active' : ''}
                            onClick={() => setServiceSelected('extra')}
                        >
                            EXTRA
                        </li>
                    </S.ServicesList>
                </nav>
                <S.Content>
                    <S.CutsList>
                        {services[serviceSelected].map((item) => (
                            <li key={item.name}>
                                <S.Cut>{item.name}</S.Cut>
                                <S.Line />
                                <S.Price>€{item.price}</S.Price>
                            </li>
                        ))}
                    </S.CutsList>
                    <S.Button>Book Now</S.Button>
                </S.Content>
            </S.Container>
        </S.Section>
    );
};

export default Services;
