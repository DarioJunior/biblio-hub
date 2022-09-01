import { styled } from '../../styles';

export const Container = styled('div', {
  width: '100vw',
  maxWidth: 1140,
  height: '100vh',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Box = styled('div', {
  display: 'flex',
  marginTop: 20,
  
  img: {
    width: '100%',
  }
})