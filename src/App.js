import logo from './logo.svg';
import './App.css';
import { User } from './User';
import Contact from './Contact';
import List from './List';
import Home from './Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <Contact /> */}
      {/* <List/> */}
      {/* <Home/> */}

      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/" >Home</Link>
            </Nav.Link>
            <Nav.Link href="#features"><Link to="/user" >User</Link></Nav.Link>

            <Nav.Link href="#features"><Link to="/contact" >Contact</Link></Nav.Link>

            <Nav.Link href="#features"><Link to="/list" >List</Link>
            </Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
