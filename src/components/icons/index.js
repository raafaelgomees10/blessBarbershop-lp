import React from 'react';
import Clock from './components/clock';
import Phone from './components/phone';
import Email from './components/email';
import Quote from './components/quote';
import Barber from './components/barber';
import Tiktok from './components/tiktok';
import Facebook from './components/facebook';
import Instagram from './components/instagram';

const Icon = ({ icon, height, width, color }) => {
    switch (icon) {
        case 'facebook':
            return <Facebook height={height} width={width} color={color} />;

        case 'tiktok':
            return <Tiktok height={height} width={width} color={color} />;

        case 'instagram':
            return <Instagram height={height} width={width} color={color} />;

        case 'quote':
            return <Quote height={height} width={width} color={color} />;

        case 'clock':
            return <Clock height={height} width={width} color={color} />;

        case 'phone':
            return <Phone height={height} width={width} color={color} />;

        case 'email':
            return <Email height={height} width={width} color={color} />;

        case 'barber':
            return <Barber height={height} width={width} color={color} />;

        default:
            return null;
    }
};

export default Icon;
