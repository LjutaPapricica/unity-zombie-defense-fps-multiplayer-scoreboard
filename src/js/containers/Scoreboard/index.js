import React, { Component } from 'react';
import Scoreboard from 'components/Scoreboard';
import xhr from 'xhr';
import { getAPIAddress } from 'utilities';
import { connect } from 'react-redux';
import { setUserInfo } from 'actions/userinfo';

const mapStateToProps = (states) => ({
    token: states.auth.token
});

@connect(mapStateToProps)
class ScoreboardContainer extends Component {
    componentDidMount() {
        this.getUserInfo();
    }
    getUserInfo = async () => {
        try {
            const { token } = this.props;
            const result = await xhr.get(getAPIAddress(`user?token=${token}`));

            this.props.dispatch(setUserInfo(result));
        }
        catch(err) {
            alert(err);
        }
    }
    render() {
        return <Scoreboard />;
    }
}

export default ScoreboardContainer;