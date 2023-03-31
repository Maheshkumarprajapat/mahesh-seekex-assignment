import React, { Fragment } from 'react'
import { Header, Footer } from 'components';
import { Banner, Collections, Featured, Offer, Products, SellingProducts, Service, Subscribe, Trending } from 'screens';
import { imgFashion, imgLoose } from 'assets/images';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Collections />
      <Trending />
      <Featured />
      <div className='bg-img'>
        <img src={imgFashion} alt="fashion" />
      </div>
      <Products />
      <SellingProducts />
      <div className='bg-img'>
        <img src={imgLoose} alt="lose" />
      </div>
      <Offer />
      <Service />
      <Subscribe />
      <Footer />
    </Fragment>
  )
}

export default App