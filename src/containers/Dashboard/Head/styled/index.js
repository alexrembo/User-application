import styled from 'styled-components'
import { Button } from '../../../../components/shared/styled'

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Header = styled.h1`
  color: #fff;
  align-self: center;
  text-transform: uppercase;
  margin: 20px 0;
`
export const LogOutButton = styled(Button)`
  width: 125px;
  align-self: flex-end;
  margin-right: 15px;
`