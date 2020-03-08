import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TemplateWrapper from './containers/templateWrapper.js'
import PersonnageList from './containers/PersonnageList.js'
import PersonnageAdd from './containers/PersonnageAdd.js'
import PersonnageEdit from './containers/PersonnageEdit.js'

class App extends Component {
  render () {
    return (
        <div className="App">
          <TemplateWrapper>
            <Switch>
              <Route path="/add" component={PersonnageAdd} />
              <Route path="/edit/:id" component={PersonnageEdit} />
              <Route path="/" exact component={PersonnageList} />
            </Switch>
          </TemplateWrapper>
        </div>
    
    );
  }
}

export default App;
