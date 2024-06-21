import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: ${(props) => props.theme.font.family3};
        font-size: 62.5%;
    }
`;
