import React, { useState } from 'react'

import useEventListener from '@use-it/event-listener'

interface IObjectLiteral {
    [key: string]: any
}

function useHeroMoviment(position) {
    const [heroPositionX, setHeroPositionX] = useState(position.x);
    const [heroPositionY, setHeroPositionY] = useState(position.y);

    const [headDirection, setHeadDirection] = useState('right')
    
    useEventListener('keydown', (event: any) => {
        const keyEvents: IObjectLiteral = {
            'ArrowUp': () => setHeroPositionY(heroPositionY + 1),
            'ArrowDown': () => setHeroPositionY(heroPositionY - 1),
            'ArrowLeft': () => {
                setHeadDirection('left');
                setHeroPositionX(heroPositionX - 1);
            },
            'ArrowRight': () => {
                setHeadDirection('right');
                setHeroPositionX(heroPositionX + 1);
            },
        }

        if (keyEvents[event.key]) {
            keyEvents[event.key]();
        }

    })

    const returnValue = {
        positionX: heroPositionX,
        positionY: heroPositionY,
        direction: headDirection
    }

    return returnValue
}

export default useHeroMoviment