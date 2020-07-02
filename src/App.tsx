import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from './views/login/Login'

const App: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
    </Switch>
  )
}

export default App
