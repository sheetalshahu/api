import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import List from './components/List';
import Result from './components/Result';

function App() {
 return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/result/:city/:state" component={Result} />
        </Switch>
      </div>
    </Router>
 );
}

export default App;