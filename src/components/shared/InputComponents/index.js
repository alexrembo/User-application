import React from 'react'

import {
  Input,
  Label,
  Content,
  ErrorMessage,
  ErrorContainer,
  Main
} from './styled'

export const RenderField = ({ input, value, label, placeholder, type, meta: { touched, active, pristine, error } }) => // eslint-disable-line
  <Content>
    <Main>
      { 
        (!pristine || active) &&
        <Label>
          { label }
        </Label>
      }
      <Input
        { ...input }
        pristine= { pristine }
        error={ error }
        value={ value }
        placeholder={ active ? '' : placeholder }
        type={ type }
      />
    </Main>
    <ErrorContainer>
    {
      (error && touched) &&
      <ErrorMessage>
        { error }
      </ErrorMessage>
    }
    </ErrorContainer>
  </Content>
