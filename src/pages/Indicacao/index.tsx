import { useNavigate } from "react-router-dom"
import { BookBox, Box, Container } from "./styles"

import logo from "../../assets/logo.png"
import { useEffect, useState } from "react"
import { Button } from "../../components/Button"

export function Indicacao() {
  const navigate = useNavigate()
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=Algoritmo&key=AIzaSyCS8t9wxQkDBTa4mFQnvF5BLPn6gi0zeiQ`)
        .then(response => response.json())
        .then(result => {
          setBooks(result.items)
        })
    }

    getBooks()
  }, [])

  return (
    <Container>
      <Box css={{ width: 150 }}>
        <img
          src={logo}
          alt="Logo"
        />
      </Box>
      <Box>
        <p
          style={{
            margin: '10px 0',
            padding: 20,
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          Veja alguns livros em destaque em bibliotecas próximas:
        </p>
      </Box>
      <Box css={{
        width: '100%',
        maxWidth: 1140,
        overflowX: "scroll",
        padding: 10,
        minHeight: 500,
        height: '100%',
      }}>
        {books && books.map(({ volumeInfo: { title, imageLinks } }: any) => (
          <BookBox>
            <h3>{title}</h3>
            <img src={imageLinks.thumbnail} />
          </BookBox>
        ))}
      </Box>
      <Box css={{ width: 200 }}>
        <Button handleClick={() => navigate(`/servicos`)}>
          Serviços
        </Button>
      </Box>
    </Container>
  )
}

