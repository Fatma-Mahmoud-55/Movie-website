import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';

const Header=()=>{

 
    return (
      <div>
        <Navbar bg="light" expand="lg">
          
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="me-5" to="/">Home</Link>
                <Link to="/movies" className="me-5">Movies</Link> 
                <Link to="/favorites">Favorites</Link> 
                
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
        </div>
      );
}

export default Header