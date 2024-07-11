import React from 'react';
import styled from 'styled-components';

const Button2 = ({ children, margin }) => {
    return (
        <Button $existsMargin={margin}>
            {children}
            <Horizontal />
            <Vertical />
        </Button>
    );
};

export default Button2;

const Button = styled.button`
    margin: ${(props) => (props.$existsMargin ? props.$existsMargin : 0)};

    background: transparent;
    border: 0;
    box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.25rem;
    outline: none;
    position: relative;
    padding: 16px 24px;
    text-transform: uppercase;
    transition: background 0.8s ease;

    &:hover {
        background: rgba(151, 118, 86, 0.1);
    }

    @media (max-width: 767px) {
        font-size: 1.3rem;
        padding: 8px 16px;
    }
`;

const Horizontal = styled.div`
    position: absolute;
    top: 0;
    right: -10px;
    bottom: 0;
    left: -10px;
    transition: transform 0.8s ease;
    will-change: transform;
    border-top: 2px solid ${(props) => props.theme.colors.secondary};
    border-bottom: 2px solid ${(props) => props.theme.colors.secondary};

    &::before {
        content: '';
        position: absolute;
        top: -12px;
        bottom: -12px;
        left: 10px;
        right: 10px;
        border: inherit;
    }

    ${Button}:hover & {
        transform: scaleX(0);
    }
`;

const Vertical = styled.div`
    position: absolute;
    top: -10px;
    right: 0;
    bottom: -10px;
    left: 0;
    transition: transform 0.8s ease;
    will-change: transform;
    border-left: 2px solid ${(props) => props.theme.colors.secondary};
    border-right: 2px solid ${(props) => props.theme.colors.secondary};

    &::before {
        content: '';
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: -12px;
        right: -12px;
        border: inherit;
    }

    ${Button}:hover & {
        transform: scaleY(0);
    }
`;
