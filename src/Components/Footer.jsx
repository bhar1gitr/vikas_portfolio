import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h3>Contact Us</h3>
            <p>Email: vikasgokhale@yahoo.com</p>
            <p>Office Email: info@asc.org.in</p>
            <p>Website: https://asc.org.in/</p>
          </Col>
          <Col md={6}>
            <h3>Follow Us</h3>
            <Link style={{color:'#4A453D',textDecoration:'none'}} to="http://youtube.com/@VikasGokhale1957">YouTube / Vikas Gokhale</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">© 2024, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
