import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './service.css'
import { iconReturn, iconQuality, iconPayment, iconHelpline } from 'assets/images'
const Service = () => {
    const data = [
        {
            id: 1,
            title: "7 Days Return",
            icon: iconReturn
        },
        {
            id: 2,
            title: "Quality Products",
            icon: iconQuality
        },
        {
            id: 3,
            title: "Safe Payment",
            icon: iconPayment
        },
        {
            id: 4,
            title: "24x7 Helpline",
            icon: iconHelpline
        },
    ]
    return (
        <section className="service">
            <Container>
                <Row>
                    {
                        data.map((item, i) => {
                            const { title, icon } = item
                            return (
                                <Col lg={3} md={6} key={i}>
                                    <div className="service-item">
                                        <div className="service-image">
                                            <img src={icon} alt={title} />
                                        </div>
                                        <div className="service-content">
                                            <h3>{title}</h3>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Service