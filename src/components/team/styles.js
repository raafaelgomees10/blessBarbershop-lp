import styled from 'styled-components';
import teamBg from '../../../public/images/team_bg.webp';
import teamBg2 from '../../../public/images/team_bg2.webp';
import teamMockup from '../../../public/images/team_mockup.png';

export const Section = styled.section`
    padding: 32px 48px;
    max-width: 1300px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    color: #161616;
    font-family: ${(props) => props.theme.font.family2};
    font-size: 6.4rem;
    font-weight: 400;
    position: relative;
    z-index: 10;
    margin-bottom: 16px;
    > span {
        position: absolute;
        color: ${(props) => props.theme.colors.secondary};
        font-family: ${(props) => props.theme.font.family2};
        font-size: 3.2rem;
        font-weight: 400;
        z-index: 0;
        bottom: 5px;
        left: 130px;
        -webkit-text-stroke-width: 0.8px;
        -webkit-text-stroke-color: #000;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    position: relative;
    width: 100%;
    overflow: hidden;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 70px;
        z-index: 1;
    }

    &::before {
        left: 0;
        background: linear-gradient(to right, #090909, rgba(0, 0, 0, 0));
    }

    &::after {
        right: 0;
        background: linear-gradient(to left, #090909, rgba(0, 0, 0, 0));
    }

    .splide {
        width: 100%;
        padding: 0 0 24px;

        &__track {
            padding: 40px 0 !important;
        }
        &__slide {
            display: flex;
            justify-content: center;
            align-items: center;
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
`;

export const Member = styled.div`
    background: url(${teamMockup.src}) no-repeat center center;
    background-size: contain; /* Garante que o background se ajuste corretamente */
    min-height: 420px;
    flex-shrink: 0;
    min-width: 290px;
    position: relative;
    z-index: 20;
    text-align: center;

    .image-container img {
        transition: 0.4s all ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }

    &:hover .name {
        background: url(${teamBg2.src}) 50% / contain no-repeat;

        > span {
            color: #000;
        }
    }
`;

export const ImageContainer = styled.div`
    bottom: 5px;
    left: -10px;
    position: absolute;
`;

export const Name = styled.div`
    background: url(${teamBg.src}) 50% / contain no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 155px;
    position: absolute;
    bottom: -30px;
    left: -30px;
    transition: 0.4s;

    > span {
        transition: 0.3s;
        font-family: ${(props) => props.theme.font.family4};
        color: #cecece;
        font-size: 3.6rem;
        margin-top: 12px;
    }
`;
