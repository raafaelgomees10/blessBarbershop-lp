import React from 'react';
import styled, { keyframes } from 'styled-components';

const Button1 = ({ children, margin }) => {
    return <Button $existsMargin={margin}>{children}</Button>;
};

export default Button1;

const stripeSlide = keyframes` 
0% {
	background-position: 0 0;
}

100% {
	background-position: 100% 100%;
}

`;

const Button = styled.button`
    background: ${(props) => props.theme.colors.secondary};
    border: 2px solid #1f1811;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
    margin: ${(props) => (props.$existsMargin ? props.$existsMargin : 0)};
    padding: 16px 24px;
    position: relative;
    text-transform: uppercase;
    transition: all 0.5s ease;

    &:after {
        content: '';
        display: block;
        height: 7px;
        width: 100%;
        background-image: repeating-linear-gradient(
            45deg,
            #1f1811,
            #1f1811 1px,
            transparent 2px,
            transparent 5px
        );
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-top: 1px solid #1f1811;
        position: absolute;
        left: 0;
        bottom: 0;
        background-size: 7px 7px;
    }

    &:hover {
        background-color: #67513b;
        color: #fff;
        border-color: #000;

        &:after {
            background-image: repeating-linear-gradient(
                45deg,
                #fff,
                #fff 1px,
                transparent 2px,
                transparent 5px
            );
            border-top: 1px solid #000;
            animation: ${stripeSlide} 12s infinite linear forwards;
        }
    }

    @media (max-width: 767px) {
    }
`;
