import { styled } from '../../styles';

export const Container = styled('div', {
  width: '100vw',
  maxWidth: 1140,
  height: '100vh',
  overflow: 'auto',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '::-webkit-scrollbar': {
    width: '14px'
  },

  '::-webkit-scrollbar-track': {
    background: '#E3E3E3',
    borderRadius: '100px'
  },

  '::-webkit-scrollbar-thumb': {
    background: '#dd9900',
    borderRadius: '100px',
  }
})

export const Box = styled('div', {
  display: 'flex',

  img: {
    width: '100%',
  }
})

export const BookBox = styled('div', {
  backgroundColor: '#eeeeee',
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  minWidth: '300px',
  textAlign: 'center',
  margin: 40,

  img: {
    width: '100%',
    maxHeight: 350
  }
})