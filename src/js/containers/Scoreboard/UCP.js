import React, { Component } from 'react';
import { redirect } from 'store';
import UCP from 'components/Scoreboard/UCP';
import { connect } from 'react-redux';

const mapStateToProps = (states) => ({
    id: states.userInfo.id,
    level: states.userInfo.level
});

@connect(mapStateToProps, null, null)
class UCPContainer extends Component {
    logout = () => {
        redirect('/');
    }
    render() {
        const { id, level } = this.props;

        return (<UCP id={id} level={level} onLogout={this.logout} />);
    }
}

export default UCPContainer;