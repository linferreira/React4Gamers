import React from 'react'

import { TILE_SIZE, HEAD_OFSET } from '../../setings/constants'

import './styles.css';


import useHeroMoviment from '../../hooks/useHeroMoviment'

const Hero = () => {

    const { positionX, positionY, direction } = useHeroMoviment({ x: 8, y: 3 })

    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * positionY,
                left: TILE_SIZE * positionX,
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFSET,
                backgroundImage: 'url(./assets/HERO.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFSET}px`,
                animation: 'hero-animation 1s steps(4) infinite',
                transform: `scaleX(${direction === 'right' ? 1 : -1})`,
                zIndex: 1,

            }}
        />
    );
}

export default Hero