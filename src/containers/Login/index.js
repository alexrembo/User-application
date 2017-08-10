// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import { Field, reduxForm, SubmissionError, getFormValues, getFormSyncErrors } from 'redux-form'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { push } from 'react-router-redux'
import { RenderField } from '../../components/shared/InputComponents'

import {
  required,
  email,
  maxLength,
  minLength,
  hasUpperCase,
  asyncValidate
} from './validate'

import * as userActions from '../../actions/user'

import type { State, Dispatch, UserData } from '../../types'

import {
  Main,
  Form,
  Label,
  InputGroup,
  Header,
  UserTitle,
  SubmitButton,
  ErrorMessage,
  RegistrationLink
} from './styled'

type Props = {
  signInUserRequest: (UserData) => void,
  currentValues: ?UserData,
  validErrors: ?Object,
};

class Login extends Component {
  props: Props;

  submit = (event) => {
    event.preventDefault()
    const {
      currentValues,
      signInUserRequest,
      validErrors
    } = this.props
    if (!validErrors && currentValues) {
      signInUserRequest(currentValues)
    }
  }
  render() {
    return (
      <Main>
        <Header>
          <UserTitle>User</UserTitle> Login
        </Header>
        <Form onSubmit={ this.submit }>
          <InputGroup>
            <Field
              name="email"
              component={ RenderField }
              type="text"
              label="Login"
              placeholder="Login"
              validate={ [required, email] }
            />
          </InputGroup>
          <InputGroup>
            <Field
              name="password"
              component={ RenderField }
              type="password"
              label="Password"
              placeholder="Password"
              validate={ [required, maxLength(24), minLength(3), hasUpperCase] }
            />
          </InputGroup>
          <SubmitButton type="submit">
            Sign In
          </SubmitButton>
          <RegistrationLink to='/registration'>
            Not registered? Click here!
          </RegistrationLink>
          {
            this.props.error &&
            <ErrorMessage>
              { this.props.error }
            </ErrorMessage>
          }
        </Form>
      </Main>
    )
  }
}


function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...userActions }, dispatch)
}

function mapStateToProps(state: State) {
  return {
    currentUser: state.users.meta.currentUser,
    currentValues: getFormValues('LoginForm')(state),
    validErrors: getFormSyncErrors('LoginForm')(state)
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default reduxForm({
  form: 'LoginForm',
  asyncValidate,
  asyncBlurFields: ['email']
})(connector(Login))
