import React from 'react'
import { withBaseLayout } from '../../layout/Base'

interface IProps {
  appName: string
}

const Dashboard: React.FC<IProps> = ({ appName }) => {
  return <h1>Dashboard here {appName}</h1>
}

export const DashboardPage = withBaseLayout(Dashboard)
