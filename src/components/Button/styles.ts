import { styled } from '../../styles'

export const Container = styled('button', {
  width: '100%',
  maxWidth: 250,
  height: 80,
  backgroundColor: '$primaryYellow',
  borderRadius: '$default',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',

  '&:hover': {
    cursor: 'pointer'
  }
})

