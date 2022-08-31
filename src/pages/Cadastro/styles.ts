import { styled } from '../../styles';

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1140,
  height: '100vh',

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
    padding: 5,
    fontSize: '20px',
    backgroundColor: '#dd9966aa',
    backgroundOpacity: 0.2,
    borderRadius: 5,

    '&:[type="date"]': {
      width: 250,
      fontSize: '20px',
      color: 'red',
      backgroundColor: '#dd9966aa',
      backgroundOpacity: 0.2,
      borderRadius: 5,
    },

  },
  
  'input:[type="tel"]': {
    width: 250,
    fontSize: '20px',
    backgroundColor: '#dd9966aa',
    backgroundOpacity: 0.2,
    borderRadius: 5,
  },

  select: {
    width: 250,
    fontSize: '20px',
    backgroundColor: '#dd9966aa',
    backgroundOpacity: 0.2,
    borderRadius: 5,

    option: {
      fontSize: '15px',
    }
  }
})