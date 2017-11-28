import styled from 'styled-components'


export const Wrapper = styled.section`
  background: #eee;
`

export const wrapperStyles = `
  width: 50%;
  padding: 2rem 5%;
  overflow: hidden;
  margin: auto;

  @media (max-width: 850px) {
    width: 65%;
  }
  @media (max-width: 600px) {
    width: 85%;
  }
`

export const transitionStyles = props => ({
  default: `
    transform-origin: 0 0;
  `,
  outBegin: `
    transform: translateX(0);
    opacity: 1;
  `,
  outEnd: `
    transform: translateX(-10%);
    opacity: 0;

  `,
  inBegin: `
    transform: translateX(50%);
    opacity: 0;

  `,
  inEnd: `
    transform: translateX(0);
    opacity: 1;
  `
})
