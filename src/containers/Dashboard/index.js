// @flow
import React from 'react'

import InfoPanel from './InfoPanel'
import UsersTable from './UsersTable'
import Head from './Head'

import { Main } from './styled'

const Dashboard = () => 
  <Main>
    <Head />
    <InfoPanel />
    <UsersTable />       
  </Main>

export default Dashboard
