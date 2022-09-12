import { useNavigate } from "react-router-dom"
import { Box, Container } from "./styles"

import logo from "../../assets/logo.png"

export function Indicacao() {
  const navigate = useNavigate()

  return (
    <Container>
      <Box css={{ border: '1px solid red', width: 250}}>
        <img
          src={logo}
          alt="Logo"
        />
      </Box>
    </Container>
  )
}

