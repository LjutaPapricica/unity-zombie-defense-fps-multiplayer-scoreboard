import React, { Component } from 'react';
import { Route } from 'react-router';
import LoginContainer from 'containers/Login';
import ScoreboardContainer from 'containers/Scoreboard';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={LoginContainer} />
                <Route exact path="/scoreboard" component={ScoreboardContainer} />
            </div>
        );
    }
}

export default App;