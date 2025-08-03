import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Psychology from '../assets/IMG_7240.jpg';

const Achievements = () => {
    return (
        <>
            <div className="accc">
                <NavBar />
                <Container className="mt-5">
                    <h1 style={{ textAlign: 'center' }}>My Degree</h1>
                    <Row className="row mt-5">
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444627/AWARDS-2/fq3et9sixsjqdhzp9ooz.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Post Graduate Degree Certificate of Yogashstra</h4>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img style={{ height: '50vh' }} className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444644/AWARDS-2/kq0qbhnsycbegplh0846.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Thesis on Collective Consciousness:- A Means For Spiritual Evolution</h4>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444180/AWARDS-2/slbtpqlopvwgryugnht2.png" alt="" />

                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Bachelor of Engineering</h4>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src={Psychology} alt="" />

                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Bachelor of Psychology</h4>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <h1 style={{ textAlign: 'center' }} className="mb-5 mt-5">Achivements</h1>

                    <Row className="row">
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444167/AWARDS-2/kewdzshxtdaaj0vmabml.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Awarded by Shri Raghav Divya Yog Research Institute for delivering Session on Health and Yoga</h4>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img style={{ height: '60vh' }} className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444626/AWARDS-2/rxdonfx9zytbjf64afu8.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Awarded by Prabodhankar Thakare Sankul Vashi, Navi Mumbai on Completion of Structure.</h4>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444628/AWARDS-2/tdemzit2bkxf26h3pzwq.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Awarded on various events for Seminars on Yoga</h4>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="row">
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444627/AWARDS-2/rseb8yd83sztvegzjbz8.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Awards by Lions Club, Kopari Thane</h4>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444285/AWARDS-2/gmvlccfvt1benineofs0.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Awarded by Lions Club, Kopari Thane for delivering Session on Yoga and Meditation</h4>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444174/AWARDS-2/ymhvh6q8meli1cte4wme.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Received as a Chief Guest on Various Events</h4>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444263/AWARDS-2/oqggsctu1mbaao0oktyi.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Awarded by The Committee of Grand Ceremony of Asia Pacific Mass Yoga Session and Living Science</h4>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <h1 style={{ textAlign: 'center' }}>News Paper</h1>

                <Container>
                    <Row className="row">
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444633/AWARDS-2/y8jshpmtk7aynahomizb.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444754/AWARDS-2/bzr57epxttn0nc8fquli.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <Card className="card">
                                <div className="view overlay">
                                    <img className="card-img-top" src="https://res.cloudinary.com/dlzjtlvf4/image/upload/v1711444635/AWARDS-2/rkzeau7whiwjk4g5fruz.png" alt="" />
                                    <a>
                                        <div className="mask rgba-white-slight"></div>
                                    </a>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <p>I have written columns in various newspapers to raise awareness about the importance of structural audits and inspections for buildings. Through these columns, I aim to educate the public about the significance of ensuring the structural integrity and safety of buildings, highlighting the potential risks associated with neglecting proper inspections. By sharing my expertise and insights, I strive to empower readers to make informed decisions regarding the maintenance and upkeep of their properties, ultimately contributing to safer and more resilient communities.</p>
                </Container>

                <Footer />
            </div>
        </>
    )
}

export default Achievements