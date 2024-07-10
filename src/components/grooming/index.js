import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Grooming = () => {
    return (
        <Container>
            <ImageWrapper>
                <StyledImage
                    src="/images/grooming.png"
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
`;

const StyledImage = styled(Image)`
    object-fit: cover;
`;
