import styled from 'styled-components';
import testimonialsBg from '../../../public/images/testimonialsBg.png';

export const Section = styled.section`
    background: url(${testimonialsBg.src}) center/cover no-repeat, rgba(9, 9, 9, 0.2);
    background-blend-mode: darken;
    display: flex;
    flex-direction: column;
    min-height: 780px;
    padding: 72px 0;
`;

export const Title = styled.h1`
    color: #161616;
    font-family: ${(props) => props.theme.font.family2};
    font-size: 6.4rem;
    font-weight: 400;
    position: relative;
    z-index: 10;

    > span {
        position: absolute;
        color: ${(props) => props.theme.colors.secondary};
        font-family: ${(props) => props.theme.font.family2};
        font-size: 3.2rem;
        font-weight: 400;
        z-index: 0;
        bottom: 0px;
        left: 180px;
        -webkit-text-stroke-width: 0.8px;
        -webkit-text-stroke-color: #000;
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
`;

export const Descrpition = styled.p`
    text-align: center;
    font-size: 1.8rem;
    max-width: 640px;
    margin: 32px 0 48px;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    position: relative;
    width: 100%;
    overflow: hidden;
    .splide {
        width: 100%;
        padding: 0 0 24px;

        &__track {
            padding: 40px 0 90px !important;
        }

        &__slide {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.2s ease-in-out;
            margin-top: 48px;

            &.is-active {
                margin-top: -48px;
            }
        }

        &__arrow {
            top: 85%;
            bottom: 0;
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
                fill: rgba(151, 118, 86, 0.77);
            }

            > svg {
                fill: rgb(151, 118, 86);

                width: 25px;
                height: 25px;

                &:hover {
                    fill: rgba(151, 118, 86, 0.77);
                }

                &:focus-visible {
                    outline: 3px solid rgb(151, 118, 86);
                    outline-offset: 3px;
                }
            }
        }
        &__pagination {
            bottom: 0px;

            &__page {
                width: 10px;
                height: 10px;
                border-radius: 0;
                transform: rotate(45deg);
                margin-right: 16px;

                &.is-active {
                    background-color: ${(props) => props.theme.colors.secondary};
                }
            }
        }
    }

    .splide.is-focus-in .splide__arrow:focus {
        outline: 3px solid rgb(151, 118, 86);
        outline-offset: 3px;
    }
`;

export const Card = styled.div`
    width: 545px;
    height: 250px;
    flex-shrink: 0;
    fill: rgba(0, 0, 0, 0.13);

    border: 3px solid rgba(151, 118, 86, 0.77);
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
        border: 3px solid rgba(151, 118, 86, 0.77);
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
    }
`;

export const ClientText = styled.div`
    text-align: center;
    font-size: 1.6rem;
    font-style: italic;
    margin: 40px 0 24px;
    max-width: 408px;
`;
export const ClientName = styled.span`
    color: ${(props) => props.theme.colors.secondary};
    display: block;
    text-align: center;
    font-size: 2.8rem;
    font-weight: 700;
`;
