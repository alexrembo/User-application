// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import type { Connector } from 'react-redux'
import {
  Field,
  reduxForm,
  getFormValues,
  getFormMeta,
  getFormSyncErrors
} from 'redux-form'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { RenderField } from '../../components/shared/InputComponents'

import {
  required,
  email,
  maxLength,
  minLength,
  hasUpperCase,
  isMatchWithPassword,
  requiredPassword,
  asyncValidate
} from './validate'

import * as userActions from '../../actions/user'

import type { State, Dispatch, UserData } from '../../types'

import { Button } from '../../components/shared/styled'

import {
  Main,
  Form,
  Label,
  InputGroup,
  Header,
  UserTitle,
  SubmitButton,
  ErrorMessage
} from './styled'

type Props = {
  userRegistrationRequest: (UserData) => void,
  currentValues: ?UserData,
  validErrors: ?Object,
};

class Registration extends Component {
  props: Props;

  submit = event => {
    const {
      currentValues,
      userRegistrationRequest,
      validErrors
    } = this.props
    event.preventDefault()
    if (!validErrors && currentValues) {
      userRegistrationRequest(currentValues)
    }
  }
  render() {
    const {
      currentValues,
      validErrors
    } = this.props
    return (
      <Main>
        <Header>
          <UserTitle>User</UserTitle> Registration
        </Header>
        <Form onSubmit={ this.submit }>
          <InputGroup>
            <Field
              name="email"
              component={ RenderField }
              type="text"
              label="Email"
              placeholder="Email"
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
          <InputGroup>
            <Field
              name="passwordConfirmation"
              component={ RenderField }
              type="password"
              label="Password confirmation"
              placeholder="Password confirmation"
              validate={ [
                required,
                maxLength(24),
                minLength(3),
                hasUpperCase,
                isMatchWithPassword(currentValues),
                requiredPassword(currentValues)
              ] }
            />
          </InputGroup>
          <InputGroup>
            <Field
              name="name"
              component={ RenderField }
              type="text"
              label="Name"
              placeholder="Name"
              validate={ [required, maxLength(100), minLength(5)] }
            />
          </InputGroup>
          <InputGroup>
            <Field
              name="company"
              component={ RenderField }
              type="text"
              label="Company"
              placeholder="Company"
            />
          </InputGroup>
          <Button type="submit">
            Registration
          </Button>
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
    currentValues: getFormValues('RegisterForm')(state),
    validErrors: getFormSyncErrors('RegisterForm')(state)
  }
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default reduxForm({
  form: 'RegisterForm',
  asyncValidate,
  asyncBlurFields: ['email']
})(connector(Registration))
