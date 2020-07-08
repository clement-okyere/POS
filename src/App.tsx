import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { LoginPage } from './views/login/Login'
import { DashboardPage } from './views/dashboard/Dashboard'

const App: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Switch>
  )
}

export default App
