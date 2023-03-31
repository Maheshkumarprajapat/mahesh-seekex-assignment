import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProfileCard from 'components/card/profile-card'
import {
    imgCard1,
    imgCard2,
    imgCard3,
    imgCard4,
    imgCard5,
    imgCard6
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
        <section className='py-4 py-md-5'>
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
            </Container>
        </section>
    )
}

export default Collections