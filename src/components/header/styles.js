import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 24px 0;
`;
export const Nav = styled.nav`
    max-width: 900px;
    width: 100%;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Span = styled.span`
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.font.family};
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    -webkit-text-stroke-color: #000;
    -webkit-text-stroke-width: 1px;
    cursor: pointer;

    &.active {
        color: ${(props) => props.theme.colors.secondary};
    }
`;
