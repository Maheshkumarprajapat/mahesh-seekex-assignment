import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import { Banner, Collections, Featured, Offer, Products, SellingProducts, Service, Subscribe, Trending } from 'screens';
import { imgFashion, imgLoose } from 'assets/images';
import AOS from "aos";

// Components
const Header = lazy(() => import("components/header"));
const Preloader = lazy(() => import("components/preloader"));
const Footer = lazy(() => import("components/footer"));

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
      <Suspense fallback={<p>loading...</p>}>
        {
          loading ?
            <Preloader />
            :
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
        }
      </Suspense>
    </Fragment>
  )
}

export default App