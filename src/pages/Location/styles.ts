import { styled } from '../../styles';

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1140,
  height: '100vh',

  border: '2px solid yellow',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
  // justifyContent: 'space-evenly',
})

export const Box = styled('div', {
  // display: 'flex',
})