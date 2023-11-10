import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Row, Container } from "react-bootstrap";
import Sidebar from './components/Sidebar';
import Main from './components/Main';


function App() {
  return (
    <Container fluid>
    <Row>
     <Sidebar/>
     <Main/>
    </Row>
  </Container>
  );
}

export default App;
