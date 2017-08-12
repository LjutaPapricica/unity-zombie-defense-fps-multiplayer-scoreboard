import React from 'react';
import PropTypes from 'prop-types';

const KillsGroup = ({ totalKills, killsGlock, killsMp5k, killsPython, killsUmp45, killsM870, killsAKM, favoriteWeapon }) => (
    <div className="killsGroup">
        <div className="killsGroup__title">Kills ({totalKills})</div>

        <table>
            <thead>
                <tr>
                    <th>Police 9mm</th>
                    <th>Compakt PDW</th>
                    <th>Portable Magnum</th>
                    <th>Auto 45</th>
                    <th>Defender Shotgun</th>
                    <th>Stov Rifle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{killsGlock}</td>
                    <td>{killsMp5k}</td>
                    <td>{killsPython}</td>
                    <td>{killsUmp45}</td>
                    <td>{killsM870}</td>
                    <td>{killsAKM}</td>
                </tr>
            </tbody>
        </table>

        <div className="killsGroup__favorite">Favorite Weapon: {favoriteWeapon}</div>
    </div>
);
KillsGroup.propTypes = {
    totalKills: PropTypes.number.isRequired,
    killsGlock: PropTypes.number.isRequired,
    killsMp5k: PropTypes.number.isRequired,
    killsPython: PropTypes.number.isRequired,
    killsUmp45: PropTypes.number.isRequired,
    killsM870: PropTypes.number.isRequired,
    killsAKM: PropTypes.number.isRequired,
    favoriteWeapon: PropTypes.string.isRequired
};

export default KillsGroup;