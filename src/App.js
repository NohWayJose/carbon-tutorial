import React, { Component } from 'react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import SolarReport from './content/SolarReport';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/solar" component={SolarReport} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
