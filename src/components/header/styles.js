import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
    top: 0;
    position: fixed;
    z-index: 99;
    transition: padding 0.3s;

    &.scrolled {
        padding: 0;
        background: rgba(0, 0, 0, 0.35);
    }
    @media (min-width: 767px) and (max-width: 1199px) {
        padding: 16px 0;
    }

    @media (max-width: 767px) {
        justify-content: flex-end;
        padding: 0;

        &.scrolled {
            background-color: unset;
        }
    }
`;
export const Nav = styled.nav`
    max-width: 900px;
    width: 100%;

    &.navMobile {
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 0.2rem;
        display: block;
        height: 100vh;
        opacity: 0;
        position: absolute;
        pointer-events: none;
        right: 0;
        top: 0;
        transform: translateX(100%);
        transition: transform 0.3s ease, opacity 0.3s ease;
        width: 100%;

        > a,
        > button {
            justify-content: flex-start;
            display: flex;
            align-items: center;
            background: none;
            width: 100%;
            border: none;
            border-bottom: 1px solid #eee;
            padding: 0.5rem 0;
            cursor: pointer;
        }
        > button {
            border-bottom: none;
        }
    }

    &.navMobileActive {
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 767px) and (max-width: 1199px) {
        padding: 0 16px;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        height: 90%;
        margin-top: 40px;
    }

    > li {
        > a {
            &.active {
                > span {
                    color: ${(props) => props.theme.colors.secondary};
                }
            }
        }

        @media (max-width: 767px) {
            margin-bottom: 24px;
            &.image {
                order: 1;
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

    @media (min-width: 768px) {
        ${Container}.scrolled & {
            transform: scale(0.8);
        }
    }
    @media (max-width: 767px) {
        ${Container} & {
            transform: scale(1.2);
        }
    }
`;

export const Spacer = styled.div`
    height: ${(props) => props.height}px;
`;

export const MobileButton = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    padding: 16px;
    transition: background-color 0.2s;
    z-index: 999;

    &.active .line1 {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 40px;
    }

    &.active .line2 {
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
        width: 40px;
    }
`;

export const Inner = styled.div`
    position: relative;
    width: 40px;
    height: 16px;
`;

export const Line = styled.span`
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 80px;
    background-color: #f2dac2;
    transition: transform 0.2s ease-in-out, width 0.2s ease-in-out, top 0.2s ease-in-out,
        background-color 0.2s ease-in-out;

    &.line1 {
        top: 0;
        width: 38px;
    }
    &.line2 {
        bottom: 0;
        width: 30px;
        background-color: #977656;
    }
`;
