import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from './views/login/Login'
import { SummaryPage } from './views/dashboard/Summary'

const App: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={SummaryPage} />
    </Switch>
  )
}

export default App
