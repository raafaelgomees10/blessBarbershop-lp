import React from 'react';
import Tiktok from './components/tiktok';
import Facebook from './components/facebook';

const Icon = ({ icon, height, width, color }) => {
    switch (icon) {
        case 'facebook':
            return <Facebook height={height} width={width} color={color} />;
        case 'tiktok':
            return <Tiktok height={height} width={width} color={color} />;

        default:
            return null;
    }
};

export default Icon;
