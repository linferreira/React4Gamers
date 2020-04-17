import React from 'react'

import { TILE_SIZE, HEAD_OFSET } from '../../setings/constants'

import  './styles.css';

const MiniDemon = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: 48*2,
                left: 48*5,
                width: TILE_SIZE,
                height:100,
                backgroundImage: 'url(./assets/MINI-DEMON.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFSET}px`,
                animation: 'miniDemon-animation 1s steps(4) infinite'
            }}
        />
    );
}

export default MiniDemon