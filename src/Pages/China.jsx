import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

const China = () => {
    return (
        <>
            <NavBar />
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


            <Container className="china mt-5">
                <p data-aos="fade-right">Meditation is a practice that involves focusing the mind to achieve mental clarity, emotional calmness, and heightened awareness. It is a key element in many spiritual traditions, including Hinduism, Buddhism, and modern mindfulness practices. Meditation can be used for relaxation, stress reduction, self-awareness, and spiritual growth.
                    There are various meditation techniques, each serving different purposes.
                    Meditation is a versatile practice with many techniques suited to different needs and goals. Whether you seek mental clarity, emotional balance, stress relief, or spiritual growth, there is a meditation technique that can help you achieve it. By incorporating meditation into daily life, you can develop greater mindfulness, reduce anxiety, and foster inner peace.</p>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/oqaY7dnCPe8?si=qdVo7lzeUWJ0EnKE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </Container>

            <Container className="china mt-5">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8kNNlckKrS4?si=6yfhTUyZ-LFIxEdQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
                <p data-aos="fade-left">Pranayama is the practice of controlling the breath, an essential part of yoga. The word "pranayama" comes from Sanskrit: "prana" meaning life force or vital energy, and "ayama" meaning extension or control. Through specific breathing techniques, pranayama helps regulate the flow of energy in the body, calming the mind and promoting physical and mental well-being. Pranayama is a powerful tool for enhancing physical health, mental clarity, and emotional balance. Incorporating pranayama into daily practice promotes overall well-being and a deeper connection between the body, breath, and mind.</p>
            </Container>
            <Footer />
        </>
    )
}

export default China