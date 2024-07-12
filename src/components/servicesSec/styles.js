import styled from 'styled-components';
import servicesBg from '../../../public/images/bgService.png';

export const Section = styled.section`
    background: url(${servicesBg.src}) 50% / cover no-repeat;
    padding: 77px 60px;
    @media (max-width: 767px) {
        padding: 0;
    }
`;

export const Container = styled.div`
    @media (min-width: 1920px) {
        margin: 0 auto;
        max-width: 1400px;

        > nav {
            display: flex;
            justify-content: center;
        }
    }

    @media (max-width: 767px) {
        max-width: 320px;
        margin: 0 auto;
    }
`;

export const Title = styled.h1`
    > span {
        bottom: 0px;
        left: 180px;

        @media (min-width: 768px) and (max-width: 1199px) {
            left: 300px;
            bottom: 0px;
        }

        @media (max-width: 767px) {
            left: 95px;
            bottom: -10px;
        }
    }
`;

export const ServicesList = styled.ul`
    max-width: 1245px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 70px 0 0;

    @media (min-width: 1920px) {
        max-width: 1400px;
    }

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

        @media (min-width: 768px) and (max-width: 1199px) {
            padding-bottom: 32px;
            width: 30%;
            font-size: 3.2rem;
        }

        @media (max-width: 767px) {
            padding-bottom: 24px;
            width: 29%;
            font-size: 2rem;
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

                @media (min-width: 1920px) {
                    right: -28px;
                }

                @media (min-width: 768px) and (max-width: 1199px) {
                    right: -21px;
                }

                @media (max-width: 767px) {
                    bottom: -4px;
                    right: -15px;
                    width: 7px;
                    height: 7px;
                }
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

    @media (min-width: 768px) and (max-width: 1199px) {
        justify-items: center;
    }

    @media (max-width: 1199px) {
        grid-template-columns: 1fr;
    }

    > li {
        width: 100%;
        margin-bottom: 16px;
        display: flex;
        max-width: 570px;
        justify-content: space-between;

        @media (min-width: 1920px) {
            justify-self: center;
        }
    }
`;

export const Cut = styled.div`
    font-family: ${(props) => props.theme.font.family4};
    font-size: 2.6rem;

    -webkit-text-stroke-width: 0.4px;
    -webkit-text-stroke-color: #000;

    @media (max-width: 767px) {
        font-size: 1.6rem;
    }
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
    font-family: ${(props) => props.theme.font.family4};

    @media (max-width: 767px) {
        font-size: 1.6rem;
    }
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
    @media (max-width: 767px) {
        top: -10px;
    }
`;
