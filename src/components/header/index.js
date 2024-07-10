import * as S from './styles';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../../public/svg/logo.svg';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };

        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, []);

    return (
        <>
            <S.Container ref={headerRef} className={isScrolled ? 'scrolled' : ''}>
                <S.Nav>
                    <S.List>
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                // offset={-85}
                                duration={500}
                            >
                                <S.Span>The Home</S.Span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                // offset={-85}
                                duration={800}
                            >
                                <S.Span>About</S.Span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                // offset={-85}
                                duration={800}
                            >
                                <S.Span>Services</S.Span>
                            </Link>
                        </li>

                        <li>
                            <S.LogoContainer>
                                <Image
                                    src={Logo}
                                    height={120}
                                    width={120}
                                    alt="Bless Logo"
                                />
                            </S.LogoContainer>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="team"
                                spy={true}
                                smooth={true}
                                // offset={-85}
                                duration={800}
                            >
                                <S.Span>Our Team</S.Span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="Testimonials"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={800}
                            >
                                <S.Span>Testimonials</S.Span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={555}
                                duration={800}
                            >
                                <S.Span>Contact</S.Span>
                            </Link>
                        </li>
                    </S.List>
                </S.Nav>
            </S.Container>
            <S.Spacer height={headerHeight} />
        </>
    );
};

export default Header;
