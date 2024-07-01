import styled from 'styled-components';
import servicesBg from '../../../public/images/servicesBg.png';

export const Section = styled.section`
    background: url(${servicesBg.src}) 50% / cover no-repeat;
    padding: 77px 60px 0;
    display: flex;
    flex-direction: column;
    height: 711px;
`;

export const Title = styled.h1``;

export const ServicesList = styled.ul`
    max-width: 1245px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 70px 0 0;

    > li {
        font-family: ${(props) => props.theme.font.family};
        font-weight: 700;
        font-size: 4rem;
        border-bottom: 1px solid #fff;
        padding-bottom: 48px;
        width: 31%;
        cursor: pointer;
        opacity: 0.5;
        position: relative;

        &.active {
            opacity: 1;
        }

        &:not(:last-of-type) {
            &::after {
                position: absolute;
                content: '';
                width: 10px;
                height: 10px;
                background-color: #fff;
                bottom: -5px;
                right: -25px;
                transform: rotate(45deg);
            }
        }
    }
`;

export const Content = styled.div`
    margin-top: 76px;
    display: flex;
    flex-direction: column;
`;

export const CutsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;

    > li {
        width: 100%;
        margin-bottom: 16px;
        display: flex;
        max-width: 570px;
        justify-content: space-between;
    }
`;

export const Cut = styled.div`
    font-family: ${(props) => props.theme.font.family4};
    font-size: 2.6rem;

    -webkit-text-stroke-width: 0.4px;
    -webkit-text-stroke-color: #000;
`;

export const LineContainer = styled.div`
    align-self: flex-end;
    flex: 1;

    > svg {
        width: 100%;
    }
`;

export const Price = styled.div`
    font-size: 2.6rem;
`;

export const Line = styled.div`
    border-bottom: 2px dotted #ce9c6b;
    flex: 1;
    align-self: flex-end;
    height: 2px;
    width: 100%;
    position: relative;
    top: -15px;
    margin: 0 12px;
    &::after {
        position: absolute;
        content: '';
        width: 7px;
        height: 7px;
        background-color: #ce9c6b;
        bottom: -4px;
        right: 0px;
        transform: rotate(45deg);
    }
    &::before {
        position: absolute;
        content: '';
        width: 7px;
        height: 7px;
        background-color: #ce9c6b;
        bottom: -4px;
        left: 0px;
        transform: rotate(45deg);
    }
`;

export const Button = styled.button`
    display: flex;
    padding: 16px 24px;
    align-items: flex-start;
    gap: 10px;
    background: ${(props) => props.theme.colors.secondary};
    border: none;
    color: ${(props) => props.theme.colors.primary};
    width: 130px;
    margin: 32px auto 0;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
`;
