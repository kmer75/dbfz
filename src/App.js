import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TemplateWrapper from './containers/templateWrapper.js'
import PersonnageList from './containers/PersonnageList.js'
import PersonnageAdd from './containers/PersonnageAdd.js'

class App extends Component {
  render () {
    return (
        <div className="App">
          <TemplateWrapper>
            <Switch>
              <Route path="/add" component={PersonnageAdd} />
              <Route path="/edit" component={PersonnageList} />
              <Route path="/" exact component={PersonnageList} />
            </Switch>
          </TemplateWrapper>
        </div>
    
    );
  }
}

export default App;
