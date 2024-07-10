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
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 840px;
    @media (min-width: 1920px) {
        margin-top: 48px;
    }
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
    margin: 48px 0 80px;
`;

export const Horizontal = styled.div`
    position: absolute;
    top: 0;
    right: -10px;
    bottom: 0;
    left: -10px;
    transition: transform 0.8s ease;
    will-change: transform;
    border-top: 2px solid ${(props) => props.theme.colors.secondary};
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};

    &::before {
        content: '';
        position: absolute;
        top: -12px;
        bottom: -12px;
        left: 10px;
        right: 10px;
        border: inherit;
    }

    ${Button}:hover & {
        transform: scaleX(0);
    }
`;

export const Vertical = styled.div`
    position: absolute;
    top: -10px;
    right: 0;
    bottom: -10px;
    left: 0;
    transition: transform 0.8s ease;
    will-change: transform;
    border-left: 2px solid ${(props) => props.theme.colors.secondary};
    border-right: 2px solid ${(props) => props.theme.colors.secondary};

    &::before {
        content: '';
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: -12px;
        right: -12px;
        border: inherit;
    }

    ${Button}:hover & {
        transform: scaleY(0);
    }
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
