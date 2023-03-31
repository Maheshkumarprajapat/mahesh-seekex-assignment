import React, { Fragment, useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import TopHeader from './top-header'
import "./header.css";
import {
  iconSearch,
  iconHeart,
  iconCart,
  iconUser,
  iconMenu
} from 'assets/images';

const Header = () => {
  const [show, setShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      }
      else {
        setShow(false);
      }
    })
  }, [])

  const handleClick = () => {
    setSearchShow(!searchShow)
  }
  const handleSideBar = () => {
    setSidebarShow(!sidebarShow)
  }
  return (
    <Fragment>
      <header className={show && 'active'}>

        <TopHeader />
        <Navbar>
          <Container>
            {/* <Navbar.Brand href="#home" className="logo d-sm-none">Logo Here</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="#home" onClick={handleSideBar}>
                  <img src={iconMenu} alt="menu" />
                </Nav.Link>
                <Nav.Link className="logo d-sm-block" href="#">
                  Logo Here
                </Nav.Link>
                <ul>
                  <li onClick={handleClick} className={searchShow && 'active'}><img src={iconSearch} alt="search" /></li>
                  <li><img src={iconHeart} alt="search" /></li>
                  <li><img src={iconCart} alt="search" /></li>
                  <li><img src={iconUser} alt="search" /></li>
                  <div className={`${searchShow && 'active'} search-box`}>
                    <input type="search" placeholder='enter search items' />
                  </div>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div onClick={handleSideBar} className={sidebarShow && 'overlay'} />
      <div className={`${sidebarShow && 'active'} sidebar`}>
        <button className='btn-circle' href="#home" onClick={handleSideBar}>
          <img src={iconMenu} alt="menu" />
        </button>
      </div>
    </Fragment>
  )
}

export default Header