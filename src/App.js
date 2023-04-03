import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react'
import AOS from "aos";
import { imgFashion, imgLoose } from 'assets/images';

// Components
const Header = lazy(() => import("components/header"));
const Preloader = lazy(() => import("components/preloader"));
const Footer = lazy(() => import("components/footer"));

// Screens
const Banner = lazy(() => import("screens/banner"));
const Collections = lazy(() => import("screens/collections"));
const Featured = lazy(() => import("screens/featured"));
const Offer = lazy(() => import("screens/offer"));
const Products = lazy(() => import("screens/products"));
const SellingProducts = lazy(() => import("screens/selling-products"));
const Service = lazy(() => import("screens/service"));
const Subscribe = lazy(() => import("screens/subscribe"));
const Trending = lazy(() => import("screens/trending"));


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