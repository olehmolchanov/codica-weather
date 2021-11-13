import React from 'react';
import { Switch, Route } from 'react-router';
import { Card } from './pages/Card/Card';
import { Home } from './pages/Home/Home';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/card" exact component={Card} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
