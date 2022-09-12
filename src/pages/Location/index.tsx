import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import ReactMapGL, { Marker, useControl } from 'react-map-gl';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Box, Container } from "./styles";

import logo from "../../assets/logo.png";

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGFyaW9qdW5pb3IiLCJhIjoiY2w3Z3IxMXdrMDdhdTNucXA5OHdheGxzaiJ9.K9C1CY4dUq-A4-WzOF4Ejw';

const Geocoder = () => {
  const ctrl = new MapBoxGeocoder({
    accessToken: MAPBOX_TOKEN,
    marker: false,
    collapsed: true
  })

  useControl(() => ctrl)
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates
  })
  return (
    null
  )
}

export function Location({ initialLat, initialLong }: any) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  console.log(initialLat, initialLong)

  useEffect(() => {
    if (searchParams.get('lat') !== '0' && lat === 0) {
      setLat(parseInt(searchParams.get('lat') || '0'))
    }

    if (searchParams.get('long') !== '0' && lat === 0) {
      setLong(parseInt(searchParams.get('long') || '0'))
    }
  }, [lat, long])

  return (
    <Container>
      <Box css={{ width: 250 }}>
        <img
          style={{ width: '100%' }}
          src={logo}
          alt="Logo"
        />
      </Box>
      <Box>
        <p
          style={{
            padding: 10,
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          Bem vindo ao bibliohub, aqui você verá as bibliotecas mais próximas de você!
        </p>
      </Box>
      <Box css={{
        width: '100%',
        height: '100%',
        maxHeight: 800,
        margin: '20px 0'
      }}>
        <ReactMapGL
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={{
            latitude: initialLat,
            longitude: initialLong,
            zoom: 8
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker
            latitude={lat - 0.5}
            longitude={long - 1}
          />

          <Marker
            latitude={lat - 0.5}
            longitude={long - 0.5}
          />
          <Marker
            latitude={lat - 0.05}
            longitude={long - 0.75}
          />
          <Marker
            latitude={lat - 0.38}
            longitude={long - 1.15}
          />
          <Geocoder />
        </ReactMapGL>
      </Box>
      <Box css={{ width: 200, margin: 10 }}>
        <Button handleClick={() => navigate(`/servicos`)}>
          Serviços
        </Button>
      </Box>
    </Container>
  )
}

