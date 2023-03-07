import React from 'react'
import '../css/header.css'
import { FaLocationArrow } from 'react-icons/fa'
import { AiFillShopping, AiOutlineShoppingCart } from 'react-icons/ai'

import { BsPersonFill, BsSearch, BsSuitHeart } from 'react-icons/bs'

import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './context/Auth'


const Header = () => {
  const topNav = [
    { id: 1, name: "Store Location", icons: <FaLocationArrow />, link: "" },
    { id: 2, name: "Shop", icons: <AiFillShopping />, link: "" },
    { id: 3, name: "My Account", icons: <BsPersonFill />, link: "" },
  ];
  const mainNav = [
    { id: 1, name: "Home", link: '/' },
    { id: 2, name: "All Products", link: '/products' },
    { id: 2, name: "About Us", link: '/about' },
    { id: 3, name: "Contact Us", link: '/contact' }
  ]
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ''
    })
    localStorage.removeItem("auth");
  }
  return (
    <>
      <header className='header-top-main '>
        <div className="left-top-nav">
          <span className='text'>
            Welcome to Store
          </span>
        </div>
        <div className="right-top-nav">

          <ul >
            {
              topNav.map((nav) => (

                <li className="li-list" key={nav.id}>{nav.icons}{nav.name}</li>
              ))
            }
          </ul>
        </div>

      </header>
      <header className='header-upper py-3'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-3">
              <h2>
                <Link className='text'>PC Componenets</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input type="text" className="form-control py-2 input-form" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch /></span>
              </div>
            </div>
            <div className="col-4 px-6">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div >
                  <Link to='/accounts' className="d-flex align-items-center justify-content-center text-dark">
                    <BsPersonFill />
                    <p className=' mb-0 px-2'>My Account</p>
                  </Link>
                </div>
                <div> <Link className='d-flex align-items-center justify-content-center text-dark'>
                  <BsSuitHeart />
                  <p className=' mb-0 px-2'>WhishList</p>
                </Link></div>
                <div> <Link className='d-flex align-items-center justify-content-center text-dark'>
                  <AiOutlineShoppingCart />
                  <p className='mb-0 px-2'>Cart</p>
                </Link></div>
                <div> {
                  !auth.user ? (<></>) : (<>
                  <div className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user.role===1?"Admin":"User"}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${auth?.user.role===1?"Admin":"User"}`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/accounts"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  </>)
                }
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
      <header className='header-bottom py-3'>
        <div className="left-bottom-header">
          <h5>All Components</h5>
        </div>
        <div className="right-bottom-header">
          <ul>
            {
              mainNav.map((mnav) => (
                <li key={mnav.id}><Link to={mnav.link} className="text-dark">{mnav.name}</Link></li>
              ))
            }
          </ul>
        </div>

      </header>
    </>
  )
}

export default Header