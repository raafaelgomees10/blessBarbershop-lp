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

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #090909;
	}

	&::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.colors.secondary};
		border-radius: 3px;

		&:hover {
			background: ${(props) => props.theme.colors.secondaryLight};
		}
	}

}

html,
body {
	background-color: #090909;
}


.sectionTitle {
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
		-webkit-text-stroke-width: 0.8px;
		-webkit-text-stroke-color: #000;
	}

	@media (max-width: 767px) {
    	text-align: center;
		font-size: 5rem;
	}
}

.sectionSubTitle {
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.font.family};
	font-size: 4.8rem;
	font-weight: 700;
}


.customSlide {
	display: flex;
	width: 100%;
	justify-content: space-between;

	position: relative;
	width: 100%;
	overflow: hidden;


	.splide {
		width: 100%;
		padding: 0 0 24px;

		&__slide {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		&__pagination {
			
			&:focus-visible {
				outline: 3px solid rgb(151, 118, 86);
				outline-offset: 3px;
			}

			&__page {
				width: 10px;
				height: 10px;
				border-radius: 0;
				transform: rotate(45deg);
				margin-right: 16px;

				&.is-active {
					background-color: ${(props) => props.theme.colors.secondary};
				}

				&:hover {
					background-color: ${(props) => props.theme.colors.secondaryLight};
				}

				&:focus {
					outline: 3px solid rgb(151, 118, 86);
					outline-offset: 3px;
				}
			}

		}
	}
}

`;
