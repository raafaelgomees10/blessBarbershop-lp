import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Grooming = () => {
    return (
        <Container>
            <ImageWrapper>
                <StyledImage
                    src="/images/grooming.webp"
                    alt="Fine Grooming is Timeless"
                    fill
                />
            </ImageWrapper>
        </Container>
    );
};

export default Grooming;

const Container = styled.div`
    width: 100%;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 360px;

    @media (min-width: 1919px) {
        height: 460px;
    }

    @media (max-width: 767px) {
        height: 270px;
    }
`;

const StyledImage = styled(Image)`
    object-fit: cover;
`;
