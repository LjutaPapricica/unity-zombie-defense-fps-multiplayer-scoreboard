import React from 'react';
import PropTypes from 'prop-types';

const PlayerRanks = ({ ranks }) => (
    <div className="playerRanks">
        <div className="playerRanks__title">Top 5 Ranks</div>

        <ol className="playerRanks__list">
            {ranks.map( rankInfo => 
                <li key={rankInfo._id}>{rankInfo.id} (Lv{rankInfo.level} / Kills {rankInfo.totalKills})</li>
            )}
        </ol>
    </div>
);
PlayerRanks.propTypes = {
    ranks: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            id: PropTypes.string,
            level: PropTypes.number,
            totalKills: PropTypes.number
        })
    ).isRequired
};

export default PlayerRanks;