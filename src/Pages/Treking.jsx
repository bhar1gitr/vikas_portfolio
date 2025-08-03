import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";

const Treking = () => {
  return (
    <>
      <NavBar></NavBar>
      <h1 style={{ textAlign: 'center' }} className="mt-5">Himalayas</h1>
      <Container className="row mt-5" style={{ margin: "0px auto" }}>
        <p data-aos="fade-up">Over the years, I have embarked on numerous treks in the Himalayas and Sahyadri Ranges, immersing myself in the breathtaking landscapes and natural beauty they offer. I have a passion for exploration and adventure, whether it involves traveling to far-flung destinations abroad or discovering hidden gems closer to home in India. Through these journeys, I find inspiration and fulfillment in experiencing diverse cultures, landscapes, and perspectives, enriching my life with unforgettable experiences and memories.</p>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            data-aos="fade-right"
            src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711432589/cevobgfe0jlfj8gam2sc.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            data-aos="fade-right"
            src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711432697/jpfojfc6nkxemfynmbrx.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            data-aos="fade-up"
            src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711433420/DSC01680_t80x3b.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            data-aos="fade-down"
            src="https://res.cloudinary.com/dlzjtlvf4/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1711432593/zpwvng0fjjybyxy4qcqq.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            data-aos="fade-up"
            src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711432631/l9p0kgdslnc1m1rdsjvq.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            data-aos="fade-left"
            src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711432608/fjnfpw1kxuwlndvgtc8y.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            data-aos="fade-up"
            src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711432609/cosqsihgmgfrmq2hgybs.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />

          <img
            data-aos="fade-left"
            src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711433425/DSC01667_ykyusm.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>
      </Container>
      {/* <h1 style={{ textAlign: 'center' }} className="mt-5">Sahyadri</h1> */}
      <Footer></Footer>
    </>
  );
};

export default Treking;
