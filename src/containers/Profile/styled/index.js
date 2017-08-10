import styled from 'styled-components'
import { Button } from '../../../components/shared/styled'

export const Main = styled.div`
  background: #D6D4D5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Header = styled.h1`
  color: #fff;
  text-transform: uppercase;
`
export const LogOutButton = styled(Button)`
  width: 125px;
  align-self: flex-end;
  margin-right: 15px;
`
export const UserTitle = styled.span`
  font-weight: bold;
`
export const UserInfo = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 340px;
`
export const Description = styled.span`
  color: red;
  margin-left: 7px;
`
export const InfoBlock = styled.div`
  font-size: 16px;
  color: #7D7B7C;
  text-align: center;
  text-transform: uppercase;
`
export const Title = styled.span`

`
