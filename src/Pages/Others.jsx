import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

const Others = () => {
  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: 'center' }} className="mt-5">Interview</h1>
      <Container className="astang mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SCCdGQsClJQ?si=kTxkc_DxIT_y47ZH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p data-aos="fade-left">Yogshastra (योगशास्त्र) refers to the science and philosophy of Yoga, a comprehensive spiritual, mental, and physical discipline that originated in ancient India. The term "Yogshastra" is derived from two Sanskrit words: Yoga, meaning union (typically of the individual self with the universal consciousness), and Shastra, meaning science or knowledge. Yogshastra is more than a set of physical exercises—it is a profound discipline that encompasses ethical living, mental control, and spiritual enlightenment. Rooted in ancient wisdom, Yogshastra offers timeless teachings for achieving balance, health, and inner peace, making it as relevant in today's world as it was thousands of years ago. Whether for physical fitness or spiritual awakening, the practice of Yogshastra can lead to a harmonious and fulfilling life.
        </p>
      </Container>
      <h1 style={{ textAlign: 'center' }} className="mt-5">Dharma</h1>
      <Container className="astang mt-5">
        <p data-aos="fade-right">Dharma & Dharmsthit Raksha Pravachan refers to a discourse or lecture series focused on the protection and preservation of Dharma, a key concept in Indian philosophy and religion. Dharma, in its broad sense, refers to the moral and ethical code that governs the behavior and duties of individuals, communities, and societies. It’s a fundamental aspect of Hinduism emphasizing righteous living and upholding truth, justice, and order in the world.
          These discourses are crucial in promoting moral awareness and ethical behavior.
          They remind people of their duties and responsibilities toward themselves, their family, society, and the cosmos.
          The Pravachan helps individuals navigate challenges in modern life while staying rooted in spiritual and ethical principles.
          The Pravachan is meant for individuals who seek to live a righteous and balanced life, as well as for leaders and decision-makers looking to uphold justice and moral values in society.
          These talks can be spiritual in nature but also extend to practical advice for maintaining ethical standards in daily life.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/thVRQXiqyhg?si=Fw2rEt2SnqT2JIuA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Container>
      <Footer />
    </>
  )
}

export default Others