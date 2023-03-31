import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './selling-products.css'
import { Button, Heading, ProductCard } from 'components'
import { imgCollections1, imgCollections2, imgCollections3, imgCollections4, imgCollections5, imgCollections6, } from 'assets/images'
const SellingProducts = () => {
    const trendingData = [
        {
            id: 1,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: "https://i.imgur.com/7cNRozs.jpg",
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 2,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: "https://i.imgur.com/7cNRozs.jpg",
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 3,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: "https://i.imgur.com/7cNRozs.jpg",
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        },
        {
            id: 4,
            title: "Men Henley Neck Full Sleeve Red Wine",
            img: "https://i.imgur.com/7cNRozs.jpg",
            price: "399",
            size: ['s', 'm', 'l', 'xl', 'xxl']
        }
    ]

    const collectionsData = [
        { id: 1, img: imgCollections1, title: "Streetwear Collections", color: "06b8a6" },
        { id: 2, img: imgCollections2, title: "Striped T-Shirts", color: "80e8ff" },
        { id: 3, img: imgCollections3, title: "Round Neck T-Shirts", color: "dc493a" },
        { id: 4, img: imgCollections4, title: "Printed T-Shirts", color: "d7b2ff" },
        { id: 5, img: imgCollections5, title: "Oversized T-Shirts", color: "f0bc8c" },
        { id: 6, img: imgCollections6, title: "Half Sleeves T-Shirts", color: "4392f1" }
    ]
    console.log("trendingData", trendingData)
    return (
        <section className='py-2 pb-md-5  pt-md-2'>
            <Container>
                <Heading title='Best Selling Products' />
                <Row className='gy-4'>
                    {
                        trendingData?.map((item, i) => (
                            <Col lg={3} md={6} key={i}><ProductCard trendItem={item} /></Col>
                        ))
                    }
                </Row>
                <div className='mt-4 mt-md-5 text-center'>
                    <Button title='VIEW all' />
                </div>

                <div className='collections'>
                    <Row className='gy-4'>
                        {
                            collectionsData?.map((item, i) => {
                                const { img, title, color } = item;
                                return (
                                    <Col lg={4} md={6}>
                                        <div className="collections-item">
                                            <div className="collections-image" style={{ background: `#${color}` }}>
                                                <img src={img} alt="" />
                                            </div>
                                            <div className="collections-content">
                                                <h4>{title}</h4>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default SellingProducts