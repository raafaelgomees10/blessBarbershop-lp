import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${(props) => props.theme.font.family3};
        font-size: 62.5%;
        list-style: none;
        margin: 0;
        padding: 0;
        color: #fff;
    }

    html, body{
        background-color: #090909;
    }

    .sectionTitle{
        color: ${(props) => props.theme.colors.secondary};
        font-family: ${(props) => props.theme.font.family2};
        font-size: 3.2rem;
        font-weight: 400;
        z-index: 20;

        -webkit-text-stroke-width: 0.1px;
        -webkit-text-stroke-color: #000;

        > span {
            color: #161616;
            font-family: ${(props) => props.theme.font.family2};
            font-size: 6.4rem;
            z-index: -1;
        }
    }

    .sectionSubTitle{
        color: ${(props) => props.theme.colors.primary};
        font-family: ${(props) => props.theme.font.family};
        font-size: 4.8rem;
        font-weight: 700;
    }
`;
