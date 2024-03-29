import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Box, Container } from "./styles"

import logo from "../../assets/logo.png"

export function Servicos() {
  const navigate = useNavigate()
  return (
    <Container>
      <Box 
        css={{ 
          width: 100,
          position: 'absolute',
          margin: '15px 0',
          top: 0,
          left: 0,
        }}>
        <img 
          src={logo}
          alt="Logo"
          style={{ width: "100%" }}
        />
      </Box>
      <h2>
        O que você busca?
      </h2>
      <Box css={{ width: 200 }}>
        <Button handleClick={() => navigate('/login')}>
          Construção de Cúrriculos
        </Button>
      </Box>

      <Box css={{ width: 200 }}>
        <Button handleClick={() => navigate('/cadastro')}>
          Cursos gratuitos
        </Button>
      </Box>

      <Box css={{ width: 200 }}>
        <Button handleClick={() => navigate('/indicacao')}>
          Indicação de Materiais
        </Button>
      </Box>

    </Container>
  )
}
