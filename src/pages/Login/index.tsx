import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Box, Container, Input } from "./styles"

import logo from "../../assets/logo.png"

export function Login() {
  const navigate = useNavigate()

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])
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
      <Box css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}>
        <Input>
          CPF:
          <input type="text" />
        </Input>
        <Input>
          SENHA:
          <input type="text" />
        </Input>
      </Box>
      <Box 
        css={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",

          button: {
            width: 150,
            height: 50
          }
        }}
      >
        <Button handleClick={ () => navigate(`/location?lat=${latitude}&long=${longitude}`)}>
          Retornar
        </Button>
        <Button handleClick={ () => navigate(`/location?lat=${latitude}&long=${longitude}`)}>
          Avançar
        </Button>
      </Box>
    </Container>
  )
}

