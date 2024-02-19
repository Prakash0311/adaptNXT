import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  display: flex;
`
export const HomeContentContainer = styled.div`
  min-height: 100px;
  margin-top: 50px;
  width: 88%;
  padding: 25px;
`