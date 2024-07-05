import React from 'react';
import Logo from '../../../public/svg/logo.svg';
import * as S from './styles';
import Image from 'next/image';
import Icon from '../icons';

const Footer = () => {
    return (
        <S.Footer id="contact">
            <S.Container>
                <S.Content>
                    <Image src={Logo} height={180} width={180} alt="Bless Logo" />
                    <S.Infos>
                        <S.Column>
                            <S.Block>
                                <S.BlockTitle>Open Days:</S.BlockTitle>

                                <S.OpenDays>
                                    <Icon icon="clock" width="48px" height="48px" />
                                    <div>
                                        <S.BlockItem className="hasIcon">
                                            <strong>Mon - Thu</strong> - 9am - 6pm
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
                            </S.Block>
                        </S.Column>
                        <S.Column>
                            <S.Block>
                                <S.BlockTitle>Contact:</S.BlockTitle>
                                <S.BlockItem className="hasIcon">
                                    <Icon icon="phone" width="48px" height="48px" />
                                    +353 83 469 9649
                                </S.BlockItem>
                                <S.BlockItem className="hasIcon">
                                    <Icon icon="email" width="48px" height="48px" />
                                    bbarber@gmail.com
                                </S.BlockItem>
                            </S.Block>
                        </S.Column>
                        <S.Column>
                            <S.BlockTitle>Location:</S.BlockTitle>

                            <S.BlockItem className="hasIcon">
                                <Icon icon="barber" width="16px" height="48px" />
                                Mayor Street Upper, Point Village,
                                <br /> D01 YB82, Dublin, Ireland 
                            </S.BlockItem>

                            <S.BlockItem>
                                <S.Newsletter>
                                    Subscribe to our newsletter
                                    <S.FormGroup>
                                        <S.Input
                                            placeholder="E-mail"
                                            id="email"
                                            required
                                        />
                                        <S.Label htmlFor="email">E-mail</S.Label>
                                        <S.Button>
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
                            </S.BlockItem>
                        </S.Column>
                    </S.Infos>
                </S.Content>
                <S.Copy>
                    <div>Bless Barbershop. 2024 All Rights Reserved.</div>
                    <div>
                        Design and Developed by <a>Rafael Gomes.</a>
                    </div>
                </S.Copy>
            </S.Container>
        </S.Footer>
    );
};

export default Footer;
