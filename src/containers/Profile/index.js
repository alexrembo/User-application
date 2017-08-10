import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../actions/user'

import type { State, Dispatch } from 'types'

import {
  Main,
  Header,
  InfoBlock,
  UserInfo,
  Title,
  Description,
  UserTitle,
  LogOutButton
} from './styled'

type Props = {
  currentUser: Object,
  logOutUserRequest: () => void
};

const Profile = ({ currentUser, logOutUserRequest }: Props) =>
  <Main>
    <LogOutButton onClick={ logOutUserRequest }>
      Log Out
    </LogOutButton>
    <Header>
      <UserTitle>User</UserTitle> Profile
    </Header>
    { 
      currentUser && 
      <UserInfo>
        <InfoBlock>
          <Title>You logged in as:</Title>
          <Description>{ currentUser.email }</Description>
        </InfoBlock>
        <InfoBlock>
          <Title>Your password:</Title> 
          <Description>{ currentUser.password }</Description>
        </InfoBlock>
        <InfoBlock>
          <Title>Your name:</Title> 
          <Description>{ currentUser.name }</Description>
        </InfoBlock>
        <InfoBlock>
          <Title>Your company:</Title>
          <Description>{ currentUser.company }</Description>
          </InfoBlock>
        <InfoBlock>
          <Title>Your last visit:</Title> 
          <Description>{ currentUser.lastVisit }</Description>
        </InfoBlock>
      </UserInfo>
    }
  </Main>

function mapStateToProps(state: State) {
  return {
    ...state.users.meta
  }
}

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...userActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
