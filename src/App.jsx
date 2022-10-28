import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

import './index.css'

function App() {

  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>

      <Container customClass="min_height">
        <Routes>    
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/company" element={<Company />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App