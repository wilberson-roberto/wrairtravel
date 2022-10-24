import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap'
import { BsPerson } from 'react-icons/bs'
import logo from '../img/logo.png'
import '../css/menu.css'


function Menu() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='/'>
        <img src={logo} alt="Air Travels" width={50}/>
        <span id='font-logo'>WR Air Travel</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />

      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/destino'>Destino</Nav.Link>
          <Nav.Link href='/promocoes'>Promoções</Nav.Link>
          <Nav.Link href='/contato' className="me-5">Contato</Nav.Link>
          <Nav.Link href='/conta' className="me-3" id='icon-conta'>
            <BsPerson fontSize={30} />
            Conta
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu