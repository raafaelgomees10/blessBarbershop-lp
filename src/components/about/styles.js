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

    @media (min-width: 1920px) {
        max-width: 1000px;
        margin: 0 auto;
        padding: 64px 0;
    }
`;

export const Content = styled.div`
    width: 500px;
    justify-self: flex-end;
    position: relative;
`;

export const Title = styled.h2`
    left: -130px;
    top: -15px;
    > span {
        bottom: 0;
        left: 130px;
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
