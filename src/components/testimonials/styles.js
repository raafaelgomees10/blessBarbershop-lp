import styled from 'styled-components';
import testimonialsBg from '../../../public/images/bgTestimonials.png';
import mask from '../../../public/images/mask.png';
import mask2 from '../../../public/images/mask2.png';

export const Section = styled.section`
    background: url(${testimonialsBg.src}) center/cover no-repeat, rgba(9, 9, 9, 0.6);
    background-blend-mode: darken;
    background-attachment: fixed;
    min-height: 780px;

    display: flex;
    flex-direction: column;

    padding: 72px 0;
    position: relative;
    z-index: 1;

    &::after,
    &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: 100% auto;
        z-index: 0;
    }

    &::after {
        bottom: 0;
        background: url(${mask.src}) 0 100% no-repeat;
    }

    &::before {
        transform: rotate(180deg);
        top: 0px;
        background: url(${mask2.src}) 0 100% no-repeat;
    }

    @media (max-width: 767px) {
        min-height: unset;
    }
`;

export const Container = styled.div`
    z-index: 2;
`;

export const Title = styled.h1`
    margin: 0 auto;
    padding: 0 48px;
    max-width: 1200px;
    > span {
        bottom: 0px;
        left: 250px;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        > span {
            left: 320px;
        }
    }

    @media (max-width: 767px) {
        max-width: 370px;
        padding: 0;
        font-size: 4.6rem;

        > span {
            bottom: -5px;
            left: 75px;
        }
    }
`;

export const Box = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Text = styled.h2`
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.font.family};
    font-size: 4.8rem;
    font-weight: 700;

    @media (max-width: 767px) {
        font-size: 3.2rem;
        letter-spacing: 1px;
    }
`;

export const Descrpition = styled.p`
    text-align: center;
    font-size: 1.8rem;
    max-width: 640px;
    margin: 32px 0 48px;

    @media (max-width: 767px) {
        font-size: 1.4rem;
        max-width: 310px;
    }
`;

export const Content = styled.div`
    .splide {
        &__track {
            padding: 40px 0 90px !important;
        }

        &__pagination {
            bottom: 8px;
        }

        &__slide {
            transition: 0.2s ease-in-out;
            margin-top: 48px;

            &.is-active {
                margin-top: -48px;
            }
        }

        &__arrow {
            top: 85%;
            bottom: 8px;
            border-radius: 50%;
            height: 50px;
            width: 50px;

            &--prev {
                left: 44%;
            }
            &--next {
                right: 45%;
            }

            &:hover:not(:disabled) svg {
                fill: ${(props) => props.theme.colors.secondary};
                opacity: 0.8;
            }

            > svg {
                fill: ${(props) => props.theme.colors.secondary};
                width: 25px;
                height: 25px;

                &:hover {
                    fill: ${(props) => props.theme.colors.secondary};
                    opacity: 0.8;
                }

                &:focus-visible {
                    outline: 3px solid rgb(151, 118, 86);
                    outline-offset: 3px;
                }
            }
            @media (max-width: 767px) {
                top: 70%;
                height: 40px;
                width: 40px;

                &--prev {
                    left: 20% !important;
                }
                &--next {
                    right: 20% !important;
                }
            }
        }
    }

    .splide.is-focus-in .splide__arrow:focus {
        outline: 3px solid rgb(151, 118, 86);
        outline-offset: 3px;
    }
    .splide:not(.is-overflow) .splide__pagination {
        display: flex;
    }
`;

export const Card = styled.div`
    width: 545px;
    height: 250px;
    flex-shrink: 0;
    fill: rgba(0, 0, 0, 0.15);

    border: 3px solid rgba(151, 118, 86, 0.8);
    border-radius: 62px;
    backdrop-filter: blur(5px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        top: -40px;
        position: absolute;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid rgba(151, 118, 86, 0.8);

        @media (max-width: 767px) {
            top: -30px;
        }
    }

    @media (max-width: 767px) {
        height: 185px;
        width: 359px;
    }
`;

export const ClientInfo = styled.div`
    position: relative;

    > svg {
        position: absolute;
        &:first-of-type {
            top: 10px;
            left: -16px;
        }
        &:last-of-type {
            right: 0px;
            transform: rotate(180deg);
            bottom: 32px;
        }

        @media (max-width: 767px) {
            &:first-of-type {
                top: 16px;
                left: 10px;
            }
        }
    }
`;

export const ClientText = styled.div`
    text-align: center;
    font-size: 1.6rem;
    font-style: italic;
    margin: 40px 0 24px;
    max-width: 408px;

    @media (max-width: 767px) {
        font-size: 1.4rem;
        max-width: 325px;
    }
`;

export const ClientName = styled.span`
    color: ${(props) => props.theme.colors.secondary};
    display: block;
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;

    @media (max-width: 767px) {
        font-size: 2.2rem;
    }
`;
