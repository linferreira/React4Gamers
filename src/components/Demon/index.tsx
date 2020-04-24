import React from 'react'

import { TILE_SIZE, DEMON_TILE_SIZE } from '../../setings/constants'

import useEnemyMoviment from '../../hooks/useEnemyMoviment'

import './styles.css';

const Demon = () => {
    const { positionX, positionY, direction } = useEnemyMoviment({ x: 5, y: 5 })

    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * positionY,
                left: TILE_SIZE * positionX,
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                backgroundImage: 'url(./assets/DEMON.png)',
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite',
                transform: `scaleX(${direction === 'right' ? 1 : -1})`,
            }}
        />
    );
}

export default Demon