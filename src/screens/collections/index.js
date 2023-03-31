import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './collections.css'
import { ProfileCard } from 'components'
import {
    imgCard1,
    imgCard2,
    imgCard3,
    imgCard4,
    imgCard5,
    imgCard6,
    imgAbout1,
    imgAbout2,
    imgAbout3,
    imgAbout4,
    imgAbout5
} from 'assets/images'

const Collections = () => {
    const data = [
        { id: 1, img: imgCard1, title: "Men’s T-Shirts", color: "F1DBE9" },
        { id: 2, img: imgCard2, title: "Women’s Wear", color: "DDD3EB" },
        { id: 3, img: imgCard3, title: "Winter Collections", color: "d3eaeb" },
        { id: 4, img: imgCard4, title: "Hooded T-Shirts", color: "EFF1D9" },
        { id: 5, img: imgCard5, title: "Polo Neck T-Shirts", color: "f1dadb" },
        { id: 6, img: imgCard6, title: "Full Sleeves T-Shirts", color: "D9F1DE" }
    ]
    return (
        <section className='collections'>
            <Container>
                <Row className='gap-4 gap-xxl-0'>
                    {
                        data?.map((item, i) => {
                            return (
                                <Col key={i}>
                                    <ProfileCard item={item} />
                                </Col>
                            )
                        })
                    }

                </Row>
                <section className="about">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} data-aos={"fade-right"} data-aos-duration={1000}>
                                <div className="about-img">
                                    <img src={imgAbout1} alt="" />
                                </div>
                            </Col>

                            <Col lg={6} md={6} data-aos={"fade-left"} data-aos-duration={1000}>
                                <div className="about-img">
                                    <img src={imgAbout2} alt="" />
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos={"fade-up"} data-aos-duration={1000}>
                                <div className="about-img">
                                    <img src={imgAbout3} alt="" />
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos={"fade-up"} data-aos-duration={2000}>
                                <div className="about-img">
                                    <img src={imgAbout4} alt="" />
                                </div>
                            </Col>

                            <Col lg={4} md={6} data-aos={"fade-up"} data-aos-duration={3000}>
                                <div className="about-img">
                                    <img src={imgAbout5} alt="" />
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
            </Container>
        </section>
    )
}

export default Collections