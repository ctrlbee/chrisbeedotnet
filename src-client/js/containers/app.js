import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './main';
import Header from '../components/header';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App;

