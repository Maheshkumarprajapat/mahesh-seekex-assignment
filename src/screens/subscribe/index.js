import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './subscribe.css'
const Subscribe = () => {
    return (
        <section className="subscribe">
            <Container>
                <div className="subscribe-box">
                    <div className="subscribe-content">
                        <h3>Subscribe to get updates on exciting offers <br /> & deals</h3>
                    </div>
                    <Row>
                        <Col lg={6} md={6} className='mx-auto'>
                            <form>
                                <input type="email" className="email" placeholder="Enter your email" />
                                <input type="submit" value="Subscribe" className="btn" />
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>)
}

export default Subscribe