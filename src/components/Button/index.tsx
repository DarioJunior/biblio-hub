import { Container } from "./styles"

interface ButtonProps {
  children: React.ReactNode,
  handleClick: () => void,
  isDisabled?: boolean
}

export const Button = ({ children, handleClick, isDisabled }: ButtonProps) => {
  return (
    <Container onClick={ handleClick } disabled={ isDisabled }>
      { children }
    </Container>
  )
}
