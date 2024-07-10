import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
    top: 0;
    position: fixed;
    z-index: 1000;
    transition: padding 0.3s;

    &.scrolled {
        padding: 0;
        background: rgba(0, 0, 0, 0.35);
    }
`;

export const Nav = styled.nav`
    max-width: 900px;
    width: 100%;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > li {
        > a {
            &.active {
                > span {
                    color: ${(props) => props.theme.colors.secondary};
                }
            }
        }
    }
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

export const LogoContainer = styled.div`
    transition: transform 0.3s;

    ${Container}.scrolled & {
        transform: scale(0.8);
    }
`;

export const Spacer = styled.div`
    height: ${(props) => props.height}px;
`;
