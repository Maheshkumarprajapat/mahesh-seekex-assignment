import React, { Fragment } from 'react'
import { Header, Footer } from 'components';
import { Banner, Collections, Featured, Offer, Products, SellingProducts, Service, Subscribe, Trending } from 'screens';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Collections />
      <Trending />
      <Featured />
      <Products />
      <SellingProducts />
      <Offer />
      <Service />
      <Subscribe />
      <Footer />
    </Fragment>
  )
}

export default App