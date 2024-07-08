import styled from 'styled-components';
import Bgt from '../../../public/images/bgBook.png';

export const Section = styled.section`
    align-items: center;
    background: url(${Bgt.src}) 50% / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 94px 0;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.font.family};
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 1px;
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.font.family2};
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.2;
    margin: 24px 0 48px;
    max-width: 700px;
    text-align: center;

    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;
`;

export const Button = styled.button`
    display: flex;
    padding: 16px 24px;
    align-items: flex-start;
    gap: 10px;
    background: ${(props) => props.theme.colors.secondary};
    border: none;
    color: ${(props) => props.theme.colors.primary};

    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
`;
