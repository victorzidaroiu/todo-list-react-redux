import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login';
import Register from './register';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </main>
  </div>
);

export default App;
