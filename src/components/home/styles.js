import styled from 'styled-components';
import homeBg from '../../../public/images/bg2.png';

export const Section = styled.section`
    background: url(${homeBg.src}) 50% / cover no-repeat;
`;

export const Content = styled.div`
    padding: 0 0 0 64px;
    width: 100%;
    max-width: 840px;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.primary};
    -webkit-text-stroke-color: #000;
    -webkit-text-stroke-width: 2px;
    font-family: ${(props) => props.theme.font.family};
    font-size: 8rem;
    letter-spacing: 6.4px;
    text-transform: uppercase;
`;

export const SubTitle = styled.h2`
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.font.family2};
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: #000;
    font-size: 3.2rem;
    font-weight: 400;
    text-transform: uppercase;
    margin: 24px 0;
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.6rem;
    width: 542px;
    opacity: 0.8;
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
    margin: 48px 0 80px;
    border-radius: 4px;
`;

export const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 105px;
    padding-bottom: 80px;

    > div {
        border-radius: 50%;
        padding: 8px;
        background: ${(props) => props.theme.colors.secondary};
    }
`;
