import * as S from './styles';
import React from 'react';
import Logo from '../../../public/svg/logo.svg';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <S.Container>
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
                            duration={500}
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
                            duration={500}
                        >
                            <S.Span>Services</S.Span>
                        </Link>
                    </li>

                    <li>
                        <Image src={Logo} height={120} width={120} alt="Bless Logo" />
                    </li>

                    <li>
                        <Link
                            activeClass="active"
                            to="Our Team"
                            spy={true}
                            smooth={true}
                            // offset={-85}
                            duration={500}
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
                            // offset={-85}
                            duration={500}
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
                            // offset={-85}
                            duration={500}
                        >
                            <S.Span>Contact</S.Span>
                        </Link>
                    </li>
                </S.List>
            </S.Nav>
        </S.Container>
    );
};

export default Header;
