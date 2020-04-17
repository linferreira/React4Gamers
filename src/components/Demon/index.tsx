import React from 'react'

import { DEMON_TILE_SIZE } from '../../setings/constants'

import  './styles.css';

const Demon = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: 48*4,
                left: 48*5,
                width: DEMON_TILE_SIZE,
                height:DEMON_TILE_SIZE,
                backgroundImage: 'url(./assets/DEMON.png)',
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite'
            }}
        />
    );
}

export default Demon