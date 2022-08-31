import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Box, Container } from "./styles"

export function Home() {
  const navigate = useNavigate()
  return (
    <Container>
      <Box css={{ width: 250}}>
        <img
          src="../../../public/assets/logo.png"
          alt="Logo"
        />
      </Box>
      <Box css={{ width: 200 }}>
        <Button handleClick={() => navigate('/login')}>
          Login
        </Button>
      </Box>

      <Box css={{ width: 200 }}>
        <Button handleClick={() => navigate('/cadastro')}>
          Cadastro
        </Button>
      </Box>

    </Container>
  )
}

