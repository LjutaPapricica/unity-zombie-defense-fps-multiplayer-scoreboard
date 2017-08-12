import React, { Component } from 'react';
import KillsGroup from 'components/Scoreboard/KillsGroup';
import { connect } from 'react-redux';

const mapStateToProps = (states) => ({
    totalKills: states.userInfo.totalKills,
    killsGlock: states.userInfo.kills.glock,
    killsMp5k: states.userInfo.kills.mp5k,
    killsPython: states.userInfo.kills.python,
    killsUmp45: states.userInfo.kills.ump45,
    killsM870: states.userInfo.kills.m870,
    killsAkm: states.userInfo.kills.akm
});

@connect(mapStateToProps, null, null)
class KillsGroupContainer extends Component {
    getFavoriteWeapon = () => {
        const { totalKills, killsGlock, killsMp5k, killsPython, killsUmp45, killsM870, killsAkm } = this.props;

        const gunStats = [
            {
                name: 'Police 9mm',
                kills: killsGlock
            },
            {
                name: 'Compakt PDW',
                kills: killsMp5k
            },
            {
                name: 'Portable Magnum',
                kills: killsPython
            },
            {
                name: 'Auto 45',
                kills: killsUmp45
            },
            {
                name: 'Defender Shotgun',
                kills: killsM870
            },
            {
                name: 'Stov Rifle',
                kills: killsAkm
            }
        ];

        let mostKills = 0;
        let mostKillWeapon = 'None';

        for(let i = 0; i < gunStats.length; i++) {
            if(gunStats[i].kills > mostKills) {
                mostKills = gunStats[i].kills;
                mostKillWeapon = gunStats[i].name;
            }
        }
        
        return mostKillWeapon;
    }
    render() {
        const { totalKills, killsGlock, killsMp5k, killsPython, killsUmp45, killsM870, killsAkm } = this.props;
        const favoriteWeapon = this.getFavoriteWeapon();

        return (
            <KillsGroup 
                totalKills={totalKills} 
                killsGlock={killsGlock} 
                killsMp5k={killsMp5k} 
                killsPython={killsPython} 
                killsUmp45={killsUmp45} 
                killsM870={killsM870} 
                killsAKM={killsAkm}
                favoriteWeapon={favoriteWeapon} />
        );
    }
}

export default KillsGroupContainer;