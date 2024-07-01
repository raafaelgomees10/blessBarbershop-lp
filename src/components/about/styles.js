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
    > span {
        top: -43px;
        left: -155px;
    }
`;

export const SubTitle = styled.h1`
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
