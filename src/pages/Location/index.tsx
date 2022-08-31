import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, useControl } from 'react-map-gl';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Box, Container } from "./styles";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGFyaW9qdW5pb3IiLCJhIjoiY2w3Z3IxMXdrMDdhdTNucXA5OHdheGxzaiJ9.K9C1CY4dUq-A4-WzOF4Ejw';

const Geocoder = () => {
  const ctrl = new MapBoxGeocoder({
    accessToken: MAPBOX_TOKEN,
    marker: true,
    collapsed: true
  })

  useControl(() => ctrl)
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates
    console.log( 'COOOOOOORDS: ', coords)
  })
  return (
    null
  )
}

export function Location() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  console.log('PARAMS:', searchParams.get('lat'))
  return (
    <Container>
      <Box css={{ width: 250}}>
        <img
          style={{ width: '100%' }}
          src="../../../public/assets/logo.png"
          alt="Logo"
        />
      </Box>
      <Box>
        <p
          style={{
            margin: '20px 0',
            padding: 20,
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          Bem vindo ao bibliohub, aqui você verá as bibliotecas mais próximas de você!
        </p>
      </Box>
      <Box css={{
        width: '100%',
        height: 300,
        border: '1px solid red'
      }}>
        <ReactMapGL
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={{
            latitude: searchParams.get('lat'),
            longitude: searchParams.get('long'),
            zoom: 8
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker
            latitude={searchParams.get('lat')}  
            longitude={searchParams.get('long')}
          />
          <Geocoder />
        </ReactMapGL>
      </Box>
      <Box>
        <Button handleClick={ () => navigate(`/servicos`)}>
          Serviços
        </Button>
      </Box>
    </Container>
    )
}

