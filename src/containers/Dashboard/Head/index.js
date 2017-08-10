// @flow
import React from 'react'
import type { Connector } from 'react-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../../actions/user'

import type { Dispatch } from '../../../types'

import {
  Main,
  Header,
  LogOutButton
} from './styled'

type Props = {
  logOutUserRequest: () => void
};

const Head = ({ logOutUserRequest }: Props) =>
  <Main>
    <LogOutButton onClick={ logOutUserRequest }>
      Log Out
    </LogOutButton>
    <Header>
      Dashboard
    </Header>
  </Main>

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...userActions }, dispatch)
}

const connector: Connector<{}, Props> = connect(
  null,
  mapDispatchToProps
)

export default connector(Head)





