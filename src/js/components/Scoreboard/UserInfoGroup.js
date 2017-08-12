import React from 'react';
import PropTypes from 'prop-types';

const UserInfoGroup = ({ id, level, exp, rexp, totalPlays, spentCash }) => (
    <div className="userInfoGroup">
        <div className="userInfoGroup__title">User Info</div>
        <div className="userInfoGroup__id">ID: {id}</div>
        <div className="userInfoGroup__level">Level: {level} (EXP {exp}/{rexp})</div>
        <div className="userInfoGroup__totalPlays">Total Plays: {totalPlays}</div>
        <div className="userInfoGroup__spentCash">Spent Cash: {spentCash}</div>
    </div>
);
UserInfoGroup.propTypes = {
    id: PropTypes.string.isRequired,
    exp: PropTypes.number.isRequired,
    rexp: PropTypes.number.isRequired,
    totalPlays: PropTypes.number.isRequired,
    spentCash: PropTypes.number.isRequired
};

export default UserInfoGroup;