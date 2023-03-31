import React, { Fragment, useEffect, useState } from 'react'
import { Header, Footer, Preloader } from 'components';
import { Banner, Collections, Featured, Offer, Products, SellingProducts, Service, Subscribe, Trending } from 'screens';
import { imgFashion, imgLoose } from 'assets/images';
import AOS from "aos";
const App = () => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Fragment>

      {/* {
        loading ?
          <Preloader />
          : */}
          <>
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
          </>
      {/* } */}

    </Fragment>
  )
}

export default App