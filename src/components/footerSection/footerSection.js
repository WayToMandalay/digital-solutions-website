import React from "react";
import './footerSection.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../footer';

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Col lg={{span: 10, offset: 1}}>
        <Footer />
        </Col>
      </Container>
    </footer>
  );
}

export default FooterSection;