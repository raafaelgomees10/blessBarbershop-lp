import styled from 'styled-components';
import FooterBg from '../../../public/images/footer.png';

export const Footer = styled.footer`
    background: url(${FooterBg.src}) 50% / cover no-repeat;
    width: 100%;
    padding: 120px 0 32px;
`;

export const Container = styled.div`
    max-width: 1190px;
    margin: 0 auto;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Infos = styled.div`
    width: 100%;
    max-width: 880px;
    display: flex;
    justify-content: space-between;
`;

export const Column = styled.div``;

export const Block = styled.div``;
export const BlockContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const BlockTitle = styled.h4`
    margin-bottom: 16px;
    color: #fbb034;
    font-size: 2rem;
`;
export const OpenDays = styled.div`
    position: relative;
    > svg {
        position: absolute;
        left: -60px;
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
`;

export const Newsletter = styled.div`
    font-size: 1.8rem;
    margin: 16px 0 64px;
    color: #fbb034;
    font-size: 2rem;
    font-weight: 700;
`;

export const FormGroup = styled.div`
    position: relative;
    /* padding: 16px 0 0; */
    margin-top: 16px;
    display: flex;
    align-items: flex-end;
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
    }

    &:focus ~ label {
        top: 8px;
        font-size: 1.8rem;
        color: #c8a47e;
        font-weight: 700;
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
    color: #c8a47e;
`;

export const Button = styled.button`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    background-color: #c8a47e;
    border: none;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin: 24px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Copy = styled.div`
    border-top: 1px solid #c8a47e;
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
`;
