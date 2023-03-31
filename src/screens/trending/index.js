import { imgProduct1, imgProduct2, imgProduct3, imgProduct4 } from 'assets/images'
import { Button, Heading, ProductCard } from 'components'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Trending = () => {
    const trendingData = [
        {
            id: 1,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: imgProduct1,
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 2,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: imgProduct2,
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 3,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: imgProduct3,
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 4,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: imgProduct4,
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 5,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: imgProduct1,
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 6,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: imgProduct2,
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 7,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: imgProduct3,
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 8,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: imgProduct4,
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
    ]
    return (
        <section className='py-4 py-md-5'>
            <Container>
                <Heading title='Trending T-Shirts' />
                <Row className='gy-4' data-aos={"fade-up"} data-aos-duration={2500}>
                    {
                        trendingData?.map((item, i) => (
                            <Col lg={3} md={6} key={i}><ProductCard trendItem={item} /></Col>
                        ))
                    }
                </Row>
                <div className='mt-4 mt-md-5 text-center'>
                    <Button title='VIEW all' />
                </div>
            </Container>
        </section>
    )
}

export default Trending