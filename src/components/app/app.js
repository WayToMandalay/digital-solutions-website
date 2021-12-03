import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
// import Container from 'react-bootstrap/Container';
import Header from '../header';
import { Container, Row, Col } from 'react-bootstrap';
import MainPage from '../mainPage';
import FormSection from '../formSection';
import FooterSection from '../footerSection';


function App() {
  return (
    <div className="app">

      <Container>
        <Header />
      </Container>

      <Container>
        <Row>
          <Col lg={{span: 8, offset: 2}}>
            <MainPage />
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 10, offset: 1}}>
            <FormSection />
          </Col>
        </Row>
      </Container>

      <FooterSection />
              

    </div>
  );
}

export default App;
