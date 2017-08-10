import styled from 'styled-components'

export const Main = styled.div`
  background: #D6D4D5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const InputGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-width: 320px;
`
export const Form = styled.form`
  display: flex;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 380px;
`
export const Label = styled.div`
  display: flex;
  font-size: 14px;
`
export const Header = styled.h1`
  color: #fff;
  text-transform: uppercase;
  
`
export const UserTitle = styled.span`
  font-weight: bold;
`
export const ErrorMessage = styled.div`
  margin: 20px 0 0;
  color: red;
  font-weight: bold;
`