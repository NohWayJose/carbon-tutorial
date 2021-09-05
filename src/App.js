import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import { DatePicker, DatePickerInput } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          {/* <Button>Button</Button>
          <DatePicker datePickerType="range">
            <DatePickerInput
              id="date-picker-input-id-start"
              dateFormat="d/m/Y"
              placeholder="dd/mm/yyyy"
              labelText="Start date"
            />
            <DatePickerInput
              id="date-picker-input-id-finish"
              dateFormat="d/m/Y"
              placeholder="dd/mm/yyyy"
              labelText="End date"
            />
          </DatePicker> */}
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
