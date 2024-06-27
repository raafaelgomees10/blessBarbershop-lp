import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    z-index: 20;
    > img {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 65px 86px 40px 208px;
`;

export const Content = styled.div`
    width: 463px;
    justify-self: flex-end;
`;

export const Title = styled.h2`
    color: ${(props) => props.theme.colors.secondary};
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: #000;
    font-family: ${(props) => props.theme.font.family2};
    font-size: 1.8rem;
    font-weight: 400;
    position: relative;
    z-index: 20;

    > span {
        color: #161616;
        font-family: ${(props) => props.theme.font.family2};
        font-size: 6.4rem;
        position: absolute;
        top: -45px;
        left: -157px;
        z-index: -1;
    }
`;

export const SubTitle = styled.h1`
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.font.family};
    font-size: 4.8rem;
    font-weight: 700;
    margin: 28px 0 44px;
`;

export const Text = styled.p`
    font-family: ${(props) => props.theme.font.family3};
    font-size: 1.8rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.text};
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
