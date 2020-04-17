import React from 'react'
import Hero from '../Hero'
import { GAME_SIZE } from '../../setings/constants';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';

const Board = () => {
    return(
        <div>
            <Demon />
            <MiniDemon />
            <Hero />
            <Chest />
            <Trap />
            <img src={'./assets/tileset.gif'} width={GAME_SIZE} height={GAME_SIZE} alt="" />
        </div>
    );
}

export default Board