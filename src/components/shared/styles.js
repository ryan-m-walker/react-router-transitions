import styled, { keyframes } from 'styled-components'

export const delayIn = keyframes`
  from { transform: translateX(200px); }
  to { transform: translateX(0px); }
`

export const H2 = styled.h2`
  ${({theme}) => `
    font-family: ${theme.font.body};
    font-size: ${theme.size.l};
    margin-bottom: ${theme.size.xl};
    `}
  font-weight: bold;
`

export const TransitionH2 = H2.extend`
  animation: ${delayIn} 550ms ease-out;
`

export const H3 = styled.h3`
  ${({theme}) => `
    font-family: ${theme.font.body};
    font-size: ${theme.size.m};
    margin-bottom: ${theme.size.l};
    `}
  font-weight: bold;
`

export const Body = styled.p`
  ${({theme}) => `
    font-family: ${theme.font.body};
  `}
  font-size: 1rem;
  line-height: 1.4rem;
`
