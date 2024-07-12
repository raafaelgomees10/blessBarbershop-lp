import React from 'react';
import Logo from '../../../public/svg/logo.svg';
import * as S from './styles';
import Image from 'next/image';
import Icon from '../icons';
import useMedia from '@/hooks/useMedia';

const Footer = () => {
    const mobile = useMedia('(max-width:767px)');

    return (
        <S.Footer id="contact">
            <S.Container>
                <S.Content>
                    <Image src={Logo} height={180} width={180} alt="Bless Logo" />
                    <S.Infos>
                        <S.Column>
                            <S.BlockTitle>Open Days:</S.BlockTitle>

                            <S.OpenDays>
                                <Icon
                                    icon="clock"
                                    width={!mobile ? '48px' : '32px'}
                                    height={!mobile ? '48px' : '32px'}
                                />
                                <div>
                                    <S.BlockItem className="hasIcon">
                                        <strong>Mon - Thu </strong> - 9am - 6pm
                                    </S.BlockItem>
                                    <S.BlockItem>
                                        <strong>Friday</strong> - 9am - 5pm
                                    </S.BlockItem>
                                    <S.BlockItem>
                                        <strong>Saturday</strong> - 10am - 3pm
                                    </S.BlockItem>
                                    <S.BlockItem>
                                        <strong>Sunday</strong> - Closed
                                    </S.BlockItem>
                                </div>
                            </S.OpenDays>
                        </S.Column>

                        <S.Column>
                            <S.BlockTitle>Contact:</S.BlockTitle>
                            <S.BlockItem className="hasIcon">
                                <Icon
                                    icon="phone"
                                    width={!mobile ? '48px' : '32px'}
                                    height={!mobile ? '48px' : '32px'}
                                />
                                +353 83 469 9649
                            </S.BlockItem>
                            <S.BlockItem className="hasIcon">
                                <Icon
                                    icon="email"
                                    width={!mobile ? '48px' : '32px'}
                                    height={!mobile ? '48px' : '32px'}
                                />
                                bbarber@gmail.com
                            </S.BlockItem>
                        </S.Column>

                        <S.Column>
                            <S.BlockTitle>Location:</S.BlockTitle>

                            <S.BlockItem className="hasIcon">
                                <Icon
                                    icon="barber"
                                    width="16px"
                                    height={!mobile ? '48px' : '38px'}
                                />
                                Mayor Street Upper, Point Village,
                                <br /> D01 YB82, Dublin, Ireland
                            </S.BlockItem>
                        </S.Column>
                    </S.Infos>
                </S.Content>
                <S.Newsletter>
                    Subscribe to our newsletter
                    <S.FormGroup>
                        <S.Input placeholder="E-mail" id="email" required />
                        <S.Label htmlFor="email">E-mail</S.Label>
                        <S.Button aria-label="sendEmail">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="49"
                                height="51"
                                viewBox="0 0 49 51"
                                fill="none"
                            >
                                <path
                                    d="M20.4465 32.1133L26.5599 26L20.4465 19.8867L22.3332 18L30.3332 26L22.3332 34L20.4465 32.1133Z"
                                    fill="white"
                                />
                            </svg>
                        </S.Button>
                    </S.FormGroup>
                </S.Newsletter>

                <S.Copy>
                    <div>Bless Barbershop. 2024 All Rights Reserved.</div>
                    <div>
                        Design and Developed by{' '}
                        <a href="https://rafaelgomes.netlify.app?utm_source=lp_blessBarbershop&utm_medium=footer&utm_campaign=lp_blessBarbershop">
                            Rafael Gomes.
                        </a>
                    </div>
                </S.Copy>
            </S.Container>
        </S.Footer>
    );
};

export default Footer;
