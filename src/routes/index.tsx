import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import { Cadastro } from '../pages/Cadastro'
import { Home } from '../pages/Home'
import { Location } from '../pages/Location'
import { Login } from '../pages/Login'
import { Servicos } from '../pages/Servicos'

function AppRouter() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </Router>
  )
}

export default AppRouter