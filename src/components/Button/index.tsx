import { Container } from "./styles"

interface ButtonProps {
  children: React.ReactNode,
  handleClick: () => void,
}

export const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <Container onClick={ handleClick }>
      { children }
    </Container>
  )
}