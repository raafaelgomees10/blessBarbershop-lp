import React from 'react';

const Quote = ({ width, height, color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="21"
            viewBox="0 0 30 21"
            fill="none"
        >
            <path
                d="M13.605 1.53927L11.6916 0C4.4883 3.95812 1.11174 8.46597 0.211321 13.5236C-0.463992 17.7016 1.22429 21 5.50127 21C8.54018 21 11.4665 19.0209 12.1419 15.7225C12.7046 11.8743 10.4536 9.56544 7.63976 9.01571C8.76529 5.27749 13.4925 1.53927 13.605 1.53927ZM23.2845 8.79582C24.5226 5.16755 29.0247 1.53927 29.1372 1.53927L27.2238 0C20.0205 3.95812 16.6439 8.46597 15.7435 13.5236C15.0682 17.7016 16.7565 21 21.0335 21C24.0724 21 26.9987 19.0209 27.5615 15.7225C28.2368 11.8743 26.0983 9.34556 23.2845 8.79582Z"
                fill="url(#paint0_radial_179_20155)"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_179_20155"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.37297 3.6) rotate(60.1956) scale(20.0524 24.4792)"
                >
                    <stop stopColor="#FFA800" />
                    <stop offset="1" stopColor="#977656" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default Quote;
