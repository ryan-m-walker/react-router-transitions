

export const transitionStyles = {
  outBegin: `
    opacity: 1;
    transform: translateY(0); 
  `,
  outEnd: `
    opacity: 0;
    transform: translateY(110%);
  `,
  inBegin: `
    opacity: 0;
    transform: translateY(110%);
  `,
  inEnd: `
    opacity: 1;
    transform: translateY(0);
  `
}


export const wrapperStyles = props => ({
  default: 'background: ' + props.theme.color
})


export const config = {
  timeIn: 250,
  timeOut: 350,
}
