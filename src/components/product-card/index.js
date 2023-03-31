import React from 'react'
import './product-card.css'
import { iconTrendingCart, iconTrendingHeart, iconTrendingShare } from 'assets/images';
const ProductCard = ({ trendItem }) => {
    const { title, img, price, size } = trendItem;
    console.log({ size });
    return (
        <div className='product'>
            <div className="product-card">
                <div className="content-overlay"></div>
                <img className="content-image" src={img} alt={title} />
                <div className="content-details fadeIn-bottom">
                    <ul>
                        <li><img src={iconTrendingCart} alt="cart" /></li>
                        <li><img src={iconTrendingHeart} alt="heart" /></li>
                        <li><img src={iconTrendingShare} alt="share" /></li>
                    </ul>
                </div>
            </div>
            <div className="product-content">
                <h3 className="content-title">{title}</h3>
                <p>₹{price} <span>₹1299</span></p>
                <ul>
                    {
                        size.map((item, i) => <li key={i}>{item}</li>)
                    }

                </ul>
            </div>
        </div>
    )
}

export default ProductCard