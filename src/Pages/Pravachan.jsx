import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

const Pravachan = () => {
  return (
    <>
      <NavBar></NavBar>
      <h1 style={{ textAlign: 'center' }} className="mt-5">China Series</h1>
      <Container className="china mt-5">
      <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLbupPFKjlF9optTkYRB0hNR5U2cCNj2MG"
          title="YouTube Playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p data-aos="fade-left">As a visiting faculty member, I have the privilege of sharing my expertise in yoga at various institutes abroad. I conduct workshops on topics such as Pranayama, stress management, and psychosomatic diseases, while also delivering lectures on Patanjali Yoga Sutra, Hatha Yoga, and Vedanta Philosophy. One notable experience was delivering sessions on meditation and Pranayama in Beijing, China, in 2020. Additionally, I regularly lead yoga practice sessions for Chinese students who visit Rishikesh annually. These opportunities allow me to contribute to the global dissemination of yoga knowledge and promote its benefits for physical and mental well-being.</p>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Pravachan