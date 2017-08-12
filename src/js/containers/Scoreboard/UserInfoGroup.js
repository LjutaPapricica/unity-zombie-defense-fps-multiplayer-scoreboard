import React, { Component } from 'react';
import UserInfoGroup from 'components/Scoreboard/UserInfoGroup';
import { connect } from 'react-redux';

const mapStateToProps = (states) => ({
    id: states.userInfo.id,
    level: states.userInfo.level,
    exp: states.userInfo.exp,
    rexp: states.userInfo.rexp,
    totalPlays: states.userInfo.totalPlays,
    spentCash: states.userInfo.spentCash
});

@connect(mapStateToProps, null, null)
class UserInfoGroupContainer extends Component {
    render() {
        const { id, level, exp, rexp, totalPlays, spentCash } = this.props;

        return (
            <UserInfoGroup 
                id={id}
                level={level} 
                exp={exp} 
                rexp={rexp} 
                totalPlays={totalPlays} 
                spentCash={spentCash} />
        );
    }
}

export default UserInfoGroupContainer;