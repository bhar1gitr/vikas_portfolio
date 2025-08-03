import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import imageSrc from "../assets/hero.jpg";
import { Container } from "react-bootstrap";
import Typewriter from 'typewriter-effect';
import consultancy from "../assets/consultancy.png";
import yoga from "../assets/yoga.png";

const Home = () => {

  return (
    <>
      <NavBar></NavBar>
      <div className="hero-section">
        <div className="left">
          <img src={imageSrc}></img>
        </div>
        <div className="right">
          <h1>Dr. Vikas Gokhale</h1>
          <Typewriter
            className="typewriter"
            options={{
              strings: ['Philosophy Professor', 'Consulting Structural Engineer'],
              autoStart: true,
              loop: true
            }}
          />
          <div style={{ overflowY: 'auto', maxHeight: '500px' }}>
            <p className="mt-3">
              Dr. Vikas Gokhale is a distinguished structural engineer with over 42 years of experience, known for his exceptional contributions to the field. Recently, he earned a Ph.D. in Yoga from Mumbai University, focusing on “Collective Consciousness – A Means for Spiritual Evolution.” A passionate advocate for yoga, meditation, and stress management, Dr. Gokhale actively teaches and conducts workshops to promote holistic well-being. His multifaceted expertise spans structural engineering, spirituality, and wellness, earning him recognition as a true polymath. His journey exemplifies passion, perseverance, and the relentless pursuit of excellence, serving as an inspiration for future generations.</p>
          </div>
        </div>
      </div>


      <section className='what-i-do' style={{ marginTop: '20px', textAlign: 'center' }}>
        <h1>Expertise In.</h1>
        <Container className="main">
          <Container data-aos="fade-right" className="img"><img style={{ padding: '112px 0px' }} src={consultancy}></img></Container>
          <Container data-aos="fade-left" className="data">
            <h1>Proprietor of Associated Consultants</h1>
            <p>With over 36 years of experience as a Consulting Structural Engineer and the Proprietor of Associated Consultants, I lead a team of 32 members, including 16 engineers. Holding a Gold Medal in B.E. (Civil) from Mumbai University, I also possess a Masters in Yogashastra and Philosophy, along with a Ph.D. in Philosophy from Kavi Kulguru Kalidas University, Nagpur. Actively engaged in social organizations and committees, I contribute to society through various initiatives, while also teaching at management institutes as a visiting faculty. Passionate about constant learning and teaching, I prioritize sharing my knowledge on stress management and yoga, and enjoy exploring classical music in my free time.</p>
          </Container>
        </Container>

        <Container className="main">
          <Container data-aos="fade-right" className="data">
            <h1>Activities in Spiritual Field</h1>
            <p>With over 16 years of experience, I've been deeply engaged in the field of yoga, serving as a visiting professor for M.A. & B.A. (Yogashastra) students, conducting daily yoga classes, and organizing camps for individuals suffering from various psychosomatic diseases. I've participated as a guest speaker in seminars and workshops, delivering lectures on stress management and the efficacy of yoga in corporate settings. Additionally, I've been involved in international outreach, serving as a visiting faculty for various yoga institutes and delivering lectures on Patanjali Yoga Sutra and Vedant Philosophy.</p>
          </Container>
          <Container data-aos="fade-left" className="img">
            <img src={yoga}></img>
          </Container>
        </Container>


        <Container className="main">
          <Container data-aos="fade-right" className="img"><img style={{ padding: '112px 0px' }} src="https://res.cloudinary.com/dpackji5g/image/upload/v1740579935/download-removebg-preview_jj93yp.png"></img></Container>
          <Container data-aos="fade-left" className="data">
            <h1>Trekking</h1>
            <p>With over 36 years of experience as a Consulting Structural Engineer and the Proprietor of Associated Consultants, I lead a team of 32 members, including 16 engineers. Holding a Gold Medal in B.E. (Civil) from Mumbai University, I also possess a Masters in Yogashastra and Philosophy, along with a Ph.D. in Philosophy from Kavi Kulguru Kalidas University, Nagpur. Actively engaged in social organizations and committees, I contribute to society through various initiatives, while also teaching at management institutes as a visiting faculty. Passionate about constant learning and teaching, I prioritize sharing my knowledge on stress management and yoga, and enjoy exploring classical music in my free time.</p>
          </Container>
        </Container>



      </section>

      <Footer></Footer>
    </>
  )
}

export default Home