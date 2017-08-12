import React from 'react';
import './Scoreboard.scss';
import UCPContainer from 'containers/Scoreboard/UCP';
import UserInfoGroupContainer from 'containers/Scoreboard/UserInfoGroup';
import KillsGroupContainer from 'containers/Scoreboard/KillsGroup';
import PlayerRanksContainer from 'containers/Scoreboard/PlayerRanks';

const Scoreboard = () => (
    <div className="view-scoreboard">
        <UCPContainer />
        
        <h1>Scoreboard</h1>

        <UserInfoGroupContainer />
        <KillsGroupContainer />
        <PlayerRanksContainer />
    </div>
);

export default Scoreboard;