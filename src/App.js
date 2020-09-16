import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Login path="/login" />
      <Register path="/register" />
      <Dashboard path="/" />
    </Router>
  );
}

export default App;
