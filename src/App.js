import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import Destino from './pages/Destino';
import Promocoes from './pages/Promocoes';
import Contato from './pages/Contato';
import Conta from './pages/Conta';
import Footer from './components/Footer';
import Menu from './components/Menu';
import CadastroForm from '../src/components/CadastroForm'

function App() {
  return (
    <Container fluid>
      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/destino' element={<Destino />} />
          <Route exact path='/promocoes' element={<Promocoes />} />
          <Route exact path='/contato' element={<Contato />} />
          <Route exact path='/conta' element={<Conta />} />
          <Route exact path='/CadastroForm' element={<CadastroForm />} />
        </Routes>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
