import styled from 'styled-components';
// import FooterBg from '../../../public/images/bgFooter.png';

export const Footer = styled.footer`
    width: 100%;
    padding: 120px 0 32px;
    /* background: url(${FooterBg.src}) 50% / contain no-repeat; */
    background-color: #0d0d0d;

    @media (max-width: 767px) {
        padding: 64px 0 16px;
    }
`;

export const Container = styled.div`
    max-width: 1190px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Infos = styled.div`
    width: 100%;
    max-width: 880px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        max-width: 310px;
    }
`;

export const Column = styled.div`
    @media (max-width: 767px) {
        margin-bottom: 16px;
        &:nth-of-type(1) {
            order: 3;
        }
        &:nth-of-type(2) {
            order: 0;
        }
        &:nth-of-type(3) {
            margin-top: 32px;
            order: -1;
        }
    }
`;

export const BlockTitle = styled.h4`
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.secondaryLight};
    font-size: 2rem;

    @media (max-width: 767px) {
        font-size: 1.8rem;
    }
`;

export const OpenDays = styled.div`
    position: relative;
    > svg {
        position: absolute;
        left: -60px;
    }

    @media (max-width: 767px) {
        display: flex;
        position: unset;

        > svg {
            position: unset;
            left: 0px;
            margin-right: 12px;
        }
    }
`;
export const BlockItem = styled.div`
    margin-bottom: 16px;
    font-size: 1.8rem;

    > strong {
        font-size: 1.8rem;
    }
    > svg {
        margin-right: 12px;
    }
    &.hasIcon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 767px) {
        max-width: 290px;
        font-size: 1.6rem;

        > strong {
            font-size: 1.6rem;
        }
    }
`;

export const Newsletter = styled.div`
    font-size: 1.8rem;
    margin: -80px 0 64px;
    color: ${(props) => props.theme.colors.secondaryLight};
    font-size: 2rem;
    font-weight: 700;
    width: 290px;
    align-self: flex-end;

    @media (max-width: 767px) {
        align-self: flex-start;
        margin: 0 auto 32px;
        align-items: flex-start;
    }
`;

export const FormGroup = styled.div`
    position: relative;
    margin-top: 8px;
    display: flex;
    align-items: flex-end;

    @media (max-width: 767px) {
        margin: 0;
    }
`;

export const Input = styled.input`
    width: 100%;
    color: #fff;
    border: 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    outline: 0;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 8px 8px 0 8px;
    /* padding: 8px 0 0; */
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ label {
        font-size: 1.8rem;
        top: 40px;

        @media (max-width: 767px) {
            font-size: 1.6rem;
        }
    }

    &:focus ~ label {
        top: 8px;
        font-size: 1.8rem;
        color: ${(props) => props.theme.colors.secondaryLight};
        font-weight: 700;
        @media (max-width: 767px) {
            font-size: 1.6rem;
        }
    }

    &:focus {
        padding-bottom: 6px;
        border-width: 3px;
        border-image: linear-gradient(to right, #fbb034, #c8a47e);
        border-image-slice: 1;
    }
`;

export const Label = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.secondaryLight};
    @media (max-width: 767px) {
        font-size: 1.6rem;
    }
`;

export const Button = styled.button`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    background-color: ${(props) => props.theme.colors.secondaryLight};
    border: none;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin: 24px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Copy = styled.div`
    border-top: 1px solid ${(props) => props.theme.colors.secondaryLight};
    display: flex;
    justify-content: space-between;
    padding: 32px 72px 0;

    > div {
        font-size: 1.6rem;

        > a {
            font-size: 1.6rem;
            cursor: pointer;
            color: ${(props) => props.theme.colors.secondary};
            &:hover {
                color: ${(props) => props.theme.colors.primary};
            }
        }
    }

    @media (max-width: 767px) {
        padding: 32px 16px 0;
        flex-direction: column;
        align-items: center;

        > div {
            font-size: 1.4rem;
            &:first-of-type {
                margin-bottom: 8px;
            }
            > a {
                font-size: 1.4rem;
            }
        }
    }
`;
