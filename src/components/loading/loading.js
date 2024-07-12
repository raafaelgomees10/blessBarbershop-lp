import styled, { keyframes } from 'styled-components';
import Logo from '../../../public/svg/logo.svg';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Loading = () => {
    const [isActive, setIsActive] = useState(true);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer2 = setTimeout(() => {
            setIsMounted(false);
        }, 4000);

        return () => clearTimeout(timer2);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Section id="loading" className={isActive ? 'active' : ''}>
            <Overlay />
            <LogoContainer className={isActive ? 'active' : ''}>
                <Image src={Logo} height={200} width={200} alt="Bless Logo" />
                <WelcomeText />
            </LogoContainer>
        </Section>
    );
};

export default Loading;

const Section = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #090909;
    transform: scaleY(0);
    transition: all 1.2s cubic-bezier(0.55, 0.02, 0.1, 0.9);
    transform-origin: top center;
    transition-delay: 2.4s;

    ${Section}.active & {
        transform: scaleY(1);
    }
`;

const floating = keyframes`
 0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
    `;
const animloader = keyframes`
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.2);
    }
       `;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    width: 600px;
    transform: translate(-50%, -150%);
    top: 0;
    opacity: 0;
    transition: all 1.6s cubic-bezier(0.55, 0.02, 0.1, 0.9);
    transition-delay: 1.8s;

    ${Section}.active & {
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 1;
    }
`;

const WelcomeText = styled.div`
    margin-top: 40px;
    position: relative;
    display: inline-block;

    &::before {
        content: 'Welcome to Bless!';
        color: ${(props) => props.theme.colors.secondary};
        font-family: ${(props) => props.theme.font.family2};
        -webkit-text-stroke-color: #000;
        -webkit-text-stroke-width: 1px;
        font-size: 4.8rem;
        letter-spacing: 2px;
        display: inline-block;
        animation: ${floating} 1s ease-out infinite alternate;

        @media (max-width: 767px) {
            font-size: 3.2rem;
        }
    }
    &::after {
        content: '';
        width: 100%;
        height: 10px;
        background: rgba(0, 0, 0, 0.35);
        position: absolute;
        left: 0;
        top: 100%;
        filter: blur(4px);
        border-radius: 50%;
        box-sizing: border-box;
        animation: ${animloader} 1s ease-out infinite alternate;
    }
`;
