import React from 'react'
import './offer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { iconDiamond, iconDiscount } from 'assets/images'
const Offer = () => {
    return (
        <section className="offer">
            <Container>
                <Row>
                    <Col lg={6} md={6} data-aos={"zoom-in-right"} data-aos-duration={2000}>
                        <div className="offer-item diamond">
                            <div className="offer-image">
                                <img src={iconDiamond} alt="" />
                            </div>
                            <div className="offer-content">
                                <h4>Hurry Up!</h4>
                                <h2>85% OFF</h2>
                                <h4>Sale</h4>
                                <div className="offer-btn">
                                    <a href="/" className="btn">shop now</a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={6} data-aos={"zoom-in-left"} data-aos-duration={2000}>
                        <div className="offer-item discount">
                            <div className="offer-image">
                                <img src={iconDiscount} alt="" />
                            </div>
                            <div className="offer-content">
                                <h4>Hurry Up!</h4>
                                <h2>75% OFF</h2>
                                <h4>Sale</h4>
                                <div className="offer-btn">
                                    <a href="/" className="btn">shop now</a>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Offer