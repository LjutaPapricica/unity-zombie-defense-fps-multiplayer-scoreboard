import React from 'react';
import PropTypes from 'prop-types';

const UCP = ({ level, id, onLogout }) => (
    <div className="ucp">
        <div className="ucp__name">Lv{level}. {id}</div>
        <button className="ucp__logout" onClick={onLogout}>Logout</button>
    </div>
);
UCP.proptypes = {
    level: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired
};

export default UCP;