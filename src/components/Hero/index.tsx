import React, { useState } from 'react'

import useEventListener from '@use-it/event-listener'

import { TILE_SIZE, HEAD_OFSET } from '../../setings/constants'

import './styles.css';
import { Transform } from 'stream';

const initialPosition = {
    x: 15,
    y: 15
}

const Hero = () => {
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState('RIGHT');

    useEventListener('keydown', (event: any) => {
        if (event.key === 'ArrowLeft') {
            updatePositionState({
                x: positionState.x - 1,
                y: positionState.y
            })
            updateDirectionState('LEFT')
        } else if (event.key === 'ArrowRight') {
            updatePositionState({
                x: positionState.x + 1,
                y: positionState.y
            })
            updateDirectionState('RIGHT')

        } else if (event.key === 'ArrowDown') {
            updatePositionState({
                x: positionState.x,
                y: positionState.y - 1
            })
        } else if (event.key === 'ArrowUp') {
            updatePositionState({
                x: positionState.x,
                y: positionState.y + 1
            })

        }
    })


    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * positionState.y,
                left: TILE_SIZE * positionState.x,
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFSET,
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFSET}px`,
                backgroundImage: 'url(./assets/HERO.png)',
                backgroundRepeat: 'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite',
                transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
            }}
        />
    );
}

export default Hero