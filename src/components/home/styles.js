import styled from 'styled-components';
import bgHome from '../../../public/images/bgHome.png';
import bgHome2x from '../../../public/images/bgHome2x.png';

export const Section = styled.section`
    background: url(${bgHome.src}) 50% / cover no-repeat;
    @media (min-width: 1920px) {
        background: url(${bgHome2x.src}) 50% / cover no-repeat;
    }
`;
export const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;

    @media (min-width: 768px) and (max-width: 1199px) {
        max-width: 760px;
    }

    @media (max-width: 767px) {
        max-width: 340px;
        text-align: center;
    }
`;

export const Content = styled.div`
    max-width: 840px;
    width: 100%;

    @media (min-width: 1920px) {
        margin-top: 48px;
    }
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.font.family};
    font-size: 8rem;
    letter-spacing: 6.4px;
    text-transform: uppercase;

    -webkit-text-stroke-color: #000;
    -webkit-text-stroke-width: 2px;

    @media (max-width: 767px) {
        font-size: 4.2rem;
        letter-spacing: 5.4px;
    }
`;

export const SubTitle = styled.h2`
    color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.font.family2};
    font-size: 3.2rem;
    font-weight: 400;
    margin: 24px 0;
    text-transform: uppercase;

    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: #000;

    @media (max-width: 767px) {
        font-size: 2.4rem;
    }
`;

export const Text = styled.p`
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.6rem;
    width: 545px;
    opacity: 0.8;

    @media (max-width: 767px) {
        width: 310px;
        opacity: 1;
    }
`;

export const Button = styled.button`
    margin: 48px 0 80px;
`;

export const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 158px;
    padding-bottom: 80px;

    > div {
        cursor: pointer;
        border: 2px solid #1f1811;
        border-radius: 50%;
        padding: 8px;
        background: ${(props) => props.theme.colors.secondary};
        transition: 0.3s all ease;
        &:hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 767px) {
        margin: 0 auto;
    }
`;
