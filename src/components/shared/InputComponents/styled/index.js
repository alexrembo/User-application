import styled from 'styled-components'

export const Input = styled.input`
  padding: 6px 12px;
  height: 35px;
  font-size: 16px;
  border: 0;
  color: #7D7B7C;
  text-align: center;
  background-color: transparent !important;
  border-bottom: 1px solid;
  text-transform: ${props => props.pristine ? 'uppercase' : 'initial'};
  outline: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;  
`
export const Label = styled.label`

`

export const ErrorMessage = styled.label`
  color: red;
`

export const ErrorContainer = styled.div`
  height: 30px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: flex-end;
`
