import styled from 'styled-components';
import teamBg from '../../../public/images/team_bg.webp';
import teamBg2 from '../../../public/images/team_bg2.webp';
import teamMockup from '../../../public/images/team_mockup.png';

export const Section = styled.section`
    padding: 32px 48px;
    max-width: 1300px;
    margin: 0 auto;

    @media (max-width: 767px) {
        max-width: 375px;
        padding: 32px 0;
    }
`;

export const Title = styled.h1`
    margin-bottom: 16px;

    > span {
        bottom: 5px;
        left: 130px;
    }

    @media (max-width: 767px) {
        > span {
            bottom: -5px;
        }
    }
`;

export const Content = styled.div`
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
        &__track {
            padding: 40px 0 !important;
        }

        &__pagination {
            bottom: 0px;
            padding: 8px;
        }
    }
`;

export const Member = styled.div`
    background: url(${teamMockup.src}) no-repeat center center;
    background-size: contain;
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

    @media (max-width: 767px) {
        min-height: 345px;
        min-width: 253px;
    }
`;

export const ImageContainer = styled.div`
    bottom: 5px;
    left: -10px;
    position: absolute;

    @media (max-width: 767px) {
        left: 3px;
    }
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

    @media (max-width: 767px) {
        width: 265px;
        height: 115px;
        left: 0px;
        > span {
            font-size: 3rem;
        }
    }
`;
