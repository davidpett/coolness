import React from 'react'
import styled from 'styled-components/primitives'

const CoolBg = styled.View`
  background-color: pink;
`
const CoolText = styled.Text`
  color: purple;
`

export default props => (
  <CoolBg>
    <CoolText>Welcome to Next.js!</CoolText>
  </CoolBg>
)
