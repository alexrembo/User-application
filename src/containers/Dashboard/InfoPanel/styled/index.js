import styled from 'styled-components'
import { Link } from 'react-router'

export const Main = styled.div`
  font-size: 16px;
  color: #7D7B7C;
  text-align: center;
  text-transform: uppercase;
`
export const UsersAmount = styled.div`
  margin: 20px 0;
`
export const Description = styled.span`
  color: red;
  margin-left: 7px;
`
export const ProfileLink = styled(Link)`
  margin-left: 10px;
  color: red;
  :hover {
    color: red;
  }
`
export const ProfileContainer = styled.div`
  margin: 10px 0;
`