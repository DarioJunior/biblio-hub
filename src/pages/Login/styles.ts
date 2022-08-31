import { styled } from '../../styles';

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1140,
  height: '100vh',

  border: '2px solid yellow',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexDirection: 'column',

  position: 'relative',
})

export const Box = styled('div', {
  display: 'flex',
})

export const Input = styled('label', {
  width: '100%',
  fontSize: '25px',
  fontWeight: 'bold',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '10px 0',

  input: {
    fontSize: '20px',
    backgroundColor: '#dd9966aa',
    backgroundOpacity: 0.2,
    borderRadius: 5,
  }
})