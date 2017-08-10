// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'

import * as userActions from '../../../actions/user'

import type { State } from '../../../types'

import {
  Main,
  UsersAmount,
  Description,
  ProfileContainer,
  ProfileLink
} from './styled'

type Props = {
  usersAmount: ?number
};

const InfoPanel = ({ usersAmount }: Props) =>
  <Main>
    <UsersAmount>
      Total amount of users in the system:
      {
        usersAmount
        ? <Description>
          { usersAmount }
        </Description>
        : 0
      }
    </UsersAmount>
    <ProfileContainer>
      Go to your 
      <ProfileLink to='/profile'>
        Profile
      </ProfileLink>
    </ProfileContainer>
  </Main>

function mapStateToProps(state: State) {
  return {
    ...state.users.meta
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps
)

export default connector(InfoPanel)
