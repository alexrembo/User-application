// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import { InfiniteLoader, Table, Column, AutoSizer } from 'react-virtualized'
import { bindActionCreators } from 'redux'
import 'react-virtualized/styles.css'

import * as userActions from '../../../actions/user'

import { getUsers } from '../../../selectors/users'

import type { State, Dispatch, UserData } from '../../../types'

import { Main } from './styled'

type Props = {
  fetchUsersRequest: (Object) => void,
  usersList: Array<UserData>,
  usersAmount: ?number
};

class UsersTable extends Component {
  props: Props;

  componentWillMount() {
    const startIndex = 0
    const { fetchUsersRequest } = this.props
    fetchUsersRequest({ startIndex })
  }
  render() {
    const { usersList, usersAmount, fetchUsersRequest } = this.props
    return (
      <Main>
        <AutoSizer>
          { ({ height, width }) => (
            <InfiniteLoader
              rowCount={ usersAmount }
              loadMoreRows={ ({ startIndex, stopIndex }) => {
                fetchUsersRequest({ startIndex })
              } }
              isRowLoaded={ ({ index }) => !!usersList[index] }
            >
              { ({ onRowsRendered, registerChild }) => (
                <Table
                  width={ width }
                  height={ height }
                  headerHeight={ 20 }
                  rowHeight={ 30 }
                  rowCount={ usersList.length }
                  onRowsRendered={ onRowsRendered }
                  ref={ registerChild }
                  rowGetter={ ({ index }) => usersList[index] }
                  rowStyle={ { display: 'flex', justifyContent: 'center'} }
                  headerStyle = { 
                    { 
                      justifyContent: 'center',
                      fontSize: '15px',
                      marginTop: '10px',
                      color: 'red',
                      fontWeight: '100'
                    }
                  }
                >
                  <Column
                    label='Email'
                    dataKey='email'
                    width={ 300 }
                  />
                  <Column
                    width={ 200 }
                    label='Last visit time'
                    dataKey='lastVisit'
                  />
                </Table>
              ) }
            </InfiniteLoader>
          ) }
        </AutoSizer>
      </Main>
    )
  }
}


function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...userActions }, dispatch)
}

function mapStateToProps(state: State) {
  return {
    usersList: getUsers({ users: state.users }),
    usersAmount: state.users.meta.usersAmount || 0
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(UsersTable)
