import React, { useState } from 'react'
import Logo from './../SourceFiles/logopl.png'
import { Link } from 'react-router-dom'
import ShopItems from '../Modal/ShopItems'

const Navbar = () => {
  const [showShop, setShowShop] = useState(false)

  function oncloseModal() {
    setShowShop((prev) => !prev)
  }

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container"><a className="navbar-brand" href="index.html"> <img className="me-3 d-inline-block" src="assets/img/gallery/logo.png" alt /></a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-bold active" aria-current="page" href="#home">Products</a></li>
              <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-bold" href="#service">UseCases</a></li>
              <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-bold" href="#feature">Developers</a></li>
              <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-bold" href="#testimonial">Pricing</a></li>
            </ul>
            <form className="ps-lg-5">
              <button className="btn btn-link text-danger fw-bold order-1 order-lg-0" type="button">Sign in</button><a className="btn hover-top btn-collab" href="#">TRY FOR FREE</a>
            </form>
          </div>
        </div>
      </nav> */}


      <nav className="navbar navbar-expand-lg fixed-top " style={{ backgroundColor: '#202020' }}>
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: '#3EB8B4' }} href="#"><img src={Logo} style={{ height: '50px', width: '170px' }} alt="" /></a>
          <button className="navbar-toggler" style={{ backgroundColor: '#3EB8B4' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon" /> */}
            <i className='fa-solid fa-chevron-down' />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item  " href='#'>
                <Link to='/' className="nav-link NavbarLinks active m-1" aria-current="page">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link NavbarLinks m-1 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: '#202020' }} aria-labelledby="navbarDropdownMenuLink">
                  <li><Link to='/Projects?stock' className="dropdown-item">Stock Trading</Link></li>
                  <li><Link to='/Projects?realEstate' className="dropdown-item" >Real Estate</Link></li>
                  <li><Link to='/Projects?crops' className="dropdown-item" >Crops</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link NavbarLinks m-1" href='#about'>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link NavbarLinks m-1" href='#pricing'>Investment Plans</a>
              </li>
              
              <li className="nav-item" style={{ cursor: 'pointer' }}>
                <a className="nav-link NavbarLinks m-1" onClick={oncloseModal}>Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link NavbarLinks m-1" href='#faq'>FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link NavbarLinks m-1" href='#contact'>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white m-1 btn btn-outline-primary ps-3 pe-3" style={{borderRadius:30}}  target="_blank" href="https://registration.plshare.com/">Register Today</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <ShopItems
        showItems={showShop}
        close={oncloseModal}
      />
    </div>
  )
}

export default Navbar