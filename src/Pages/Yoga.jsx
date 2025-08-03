import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"

import { Container } from "react-bootstrap";

const Yoga = () => {
  return (
    <>
      <NavBar></NavBar>
      <h1 style={{ textAlign: 'center' }} className="mt-5">Patanjali</h1>
      <Container className="astang mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9GOW1yTEueo?si=S7Xui-URKWgg1iVE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p data-aos="fade-left">The Patanjali Yoga Sutras, attributed to the sage Patanjali, is one of the most foundational texts in the philosophy and practice of yoga. Composed of 196 aphorisms, or succinct philosophical statements, the Yoga Sutras serve as a guidebook for those seeking to understand the nature of the mind, the practice of yoga, and the path to spiritual liberation. I have conducted various sessions on Patanjali Yog Sutra for Yoga Teachers. You can go through all sessions by using below videos.</p>
      </Container>

      <h1 style={{ textAlign: 'center' }} className="mt-5">Ashtang Yog</h1>
      <Container className="astang mt-5">
        <p data-aos="fade-right">I have had the opportunity to conduct Ashtanga Yoga lectures in Nashik, specifically tailored for Ayurvedic doctors and enthusiasts of yoga and Ayurveda. Ashtanga Yoga, often referred to as the Eight Limbs of Yoga, offers a structured approach to spiritual practice as outlined by the sage Patanjali in the Yoga Sutras. Through these lectures, I aim to provide participants with a comprehensive understanding of Ashtanga Yoga's principles and practices, guiding them on a transformative journey towards inner peace, harmony, and spiritual awakening. The series of 8 lectures are accessible through video recordings, offering a valuable resource for individuals seeking to deepen their knowledge and practice of Ashtanga Yoga.</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pax3xEv2vZc?si=vd3AEN7a-h78tMxp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </Container>

      <h1 style={{ textAlign: 'center' }} className="mt-5">Yog Nidra</h1>
      <Container className="astang mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pax3xEv2vZc?si=vd3AEN7a-h78tMxp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p data-aos="fade-left">Yoga nidra, also known as yogic sleep, is an ancient meditation technique that brings practitioners into a deeper state of conscious relaxation.
          Yoga nidra involves entering a state of conscious sleep where the body is completely relaxed, yet the mind remains awake and alert.
          During a yoga nidra session, practitioners follow verbal instructions that incorporate breath awareness, body scanning, and other techniques.
          Unlike traditional meditation, which focuses on a single point, yoga nidra encourages internal withdrawal of the senses.
          Sessions can range from 15 minutes to over an hour, guiding individuals between wakefulness and dreaming.
          Benefits:
          Yoga nidra rejuvenates both the physical body and the spirit.
          It allows practitioners to tap into inner wisdom and find peace beyond external chaos.
          The practice can lead to transformative work at mental, emotional, and physical levels.
          If you’re interested in experiencing yoga nidra, you can explore guided videos</p>
      </Container>

      <h1 style={{ textAlign: 'center' }} className="mt-5">Stress Management</h1>
      <Container className="stress mt-5">
        <p data-aos="fade-right">I have conducted a session on stress management, comprising 11 videos that emphasize maintaining overall well-being and productivity. These videos cover effective stress management techniques, including mindfulness, meditation, relaxation techniques, healthy lifestyle choices, and setting boundaries. Through this comprehensive approach, I aim to empower individuals to effectively manage stress and enhance their overall quality of life.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/M1O5fMVpdYU?si=X-HkrGabrD4YKEEn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Yoga