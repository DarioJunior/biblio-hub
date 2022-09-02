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
    marker: true,
    collapsed: true
  })

  useControl(() => ctrl)
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates
    console.log('COOOOOOORDS: ', coords)
  })
  return (
    null
  )
}

export function Location() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  useEffect(() => {
    if (searchParams.get('lat') !== '0' && lat === 0) {
      setLat(parseInt(searchParams.get('lat') || '0'))
    }

    if (searchParams.get('long') !== '0' && lat === 0) {
      setLong(parseInt(searchParams.get('long') || '0'))
    }
  }, [lat, long])
  
  console.log('PARAMS:', lat)
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
        height: '100%',
      }}>
        <ReactMapGL
          mapboxAccessToken={MAPBOX_TOKEN}
          initialViewState={{
            latitude: lat,
            longitude: long,
            zoom: 8
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <Marker
            latitude={lat}
            longitude={long}
          />

          <Marker
            latitude={lat-0.5}
            longitude={long+0.1}
          />
          <Marker
            latitude={lat+0.08}
            longitude={long-0.45}
          />
          <Marker
            latitude={lat-0.38}
            longitude={long-1.45}
          />
          <Geocoder />
        </ReactMapGL>
      </Box>
      <Box css={{ width: 200 }}>
        <Button handleClick={() => navigate(`/servicos`)}>
          Serviços
        </Button>
      </Box>
    </Container>
  )
}

