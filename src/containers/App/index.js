// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import { Main } from './styled'

import * as userActions from '../../actions/user'

import type { Dispatch } from '../../types'

type Props = {
  children: any
};

const App = ({ children }: Props) => 
  <Main>
    { children }
  </Main>

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...userActions }, dispatch)
}

const connector: Connector<{}, Props> = connect(
  null,
  mapDispatchToProps
)

export default connector(App)
