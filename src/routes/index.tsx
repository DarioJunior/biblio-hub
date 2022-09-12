import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import { Cadastro } from '../pages/Cadastro'
import { Home } from '../pages/Home'
import { Indicacao } from '../pages/Indicacao'
import { Location } from '../pages/Location'
import { Login } from '../pages/Login'
import { Servicos } from '../pages/Servicos'


function AppRouter() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
  }, [])

 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location initialLat={latitude} initialLong={longitude} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/indicacao" element={<Indicacao />} />
      </Routes>
    </Router>
  )
}

export default AppRouter