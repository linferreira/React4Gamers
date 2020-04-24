import React from 'react'

import { TILE_SIZE, HEAD_OFSET } from '../../setings/constants'

import useEnemyMoviment from '../../hooks/useEnemyMoviment'

import './styles.css';

const MiniDemon = () => {
    const { positionX, positionY, direction } = useEnemyMoviment({ x: 10, y: 5 })

    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * positionY,
                left: TILE_SIZE * positionX,
                width: TILE_SIZE,
                height: 100,
                backgroundImage: 'url(./assets/MINI-DEMON.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFSET}px`,
                animation: 'miniDemon-animation 1s steps(4) infinite',
                transform: `scaleX(${direction === 'right' ? 1 : -1})`,
            }}
        />
    );
}

export default MiniDemon