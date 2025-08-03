import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Image, Row, Col } from 'react-bootstrap';
import o1 from "../assets/office1.jpg";
import o2 from "../assets/office2.jpg";
import o3 from "../assets/office3.jpg";
import o4 from "../assets/office4.jpg";

import { Container } from "react-bootstrap";

const Office = () => {
  return (
    <>
      <NavBar></NavBar>


      <section className="office">
        <h1 style={{ textAlign: 'center' }} className="mt-5">Office</h1>
        <Container className="three mt-5">
          <div data-aos="fade-right" className="left"><img src={"https://res.cloudinary.com/dpackji5g/image/upload/v1741071712/Logo_ASC_1_vcieiu.jpg"}></img></div>
          <div data-aos="fade-left" className="right" style={{ padding: '60px 0px' }}>
              <p>Dr. Vikas Gokhale, a gold medalist from VJTI (1979) and topper in “Structural Analysis & Design” at Bombay University, founded Associated Consultants in 1983. Under his leadership, the firm has grown into a renowned multidisciplinary consultancy with over 42 years of experience and a team of 55, including 25 engineers. With offices in Thane and Kalyan, they have successfully completed 2000+ projects—spanning residential, commercial, industrial, and multiplex structures—for reputed builders and architects across India and internationally.</p>
              <a href="http://www.asc.org.in/" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>

        </Container>
      </section>

      <section className="lions-club">
        <h1 style={{ textAlign: 'center' }} className="mt-5">Lions Club</h1>

        <Container>
          <div style={{ textAlign: 'center' }}>
            <img id="lion" data-aos="fade-up" style={{ width: '20%' }} src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1717238459/xntwdgvielidvsiausim.png"></img>
          </div>
          <div style={{ overflowY: 'auto', maxHeight: '200px' }}>
            <p data-aos="fade-u" className="mt-2 office-p">Mr. Vikas Gokhale serves as the Permanent Trustee of the Lions Club of Thane Kopri, where he plays a key role in shaping the club's strategic direction and community initiatives. With a strong commitment to service, he has led numerous impactful projects, including health camps, educational programs, and support for local charities. His leadership, compassion, and dedication to humanitarian efforts have made a meaningful difference in the lives of many. Mr. Gokhale exemplifies the core values of the Lions Club, inspiring others through his vision, service, and unwavering civic responsibility.</p>
          </div>

        </Container>
      </section>
      <Footer></Footer>
    </>
  )
}

export default Office