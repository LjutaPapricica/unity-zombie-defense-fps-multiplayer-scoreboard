import React, { Component } from 'react';
import PlayerRanks from 'components/Scoreboard/PlayerRanks';
import xhr from 'xhr';
import { getAPIAddress } from 'utilities';
import { connect } from 'react-redux';

const mapStateToProps = (states) => ({
    token: states.auth.token
});

@connect(mapStateToProps, null, null)
class PlayerRanksGroupContainer extends Component {
    state = {
        rankData: []
    }
    componentDidMount() {
        this.getRankData();
    }
    getRankData = async () => {
        try {
            const { token } = this.props;
            const rankData = await xhr.get(getAPIAddress(`ranks?token=${token}`));

            this.setState({ rankData });
        }
        catch(err) {
            alert(err);
        }
    }
    render() {
        const { rankData } = this.state;

        return <PlayerRanks ranks={rankData} />;
    }
}

export default PlayerRanksGroupContainer;