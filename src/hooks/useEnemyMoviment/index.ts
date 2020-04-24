import React, { useState } from 'react'

import { EDirection } from '../../setings/constants'


import useInterval from '@use-it/interval'

interface IObjectLiteral {
    [key: string]: any
}

function useEnemyMoviment(position) {
    const [enemyPositionX, setEnemyPositionX] = useState(position.x);
    const [enemyPositionY, setEnemyPositionY] = useState(position.y);

    const [headDirection, setHeadDirection] = useState('right')

    useInterval(function move() {
        let random = Math.floor(Math.random() * 4)
        let directionArray = Object.values(EDirection)
        const randomDirection = directionArray[random]

        const ra: IObjectLiteral = {
            'ArrowUp': () => setEnemyPositionY(enemyPositionY + 1),
            'ArrowDown': () => setEnemyPositionY(enemyPositionY - 1),
            'ArrowLeft': () => {
                setHeadDirection('left');
                setEnemyPositionX(enemyPositionX - 1);
            },
            'ArrowRight': () => {
                setHeadDirection('right');
                setEnemyPositionX(enemyPositionX + 1);
            },
        }

        console.log('executou')
    }, 2000)



    const returnValue = {
        positionX: enemyPositionX,
        positionY: enemyPositionY,
        direction: headDirection
    }

    return returnValue
}

export default useEnemyMoviment