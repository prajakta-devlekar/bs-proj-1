import React from 'react'
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
  <Link className="navbar-brand" to="#">
    <img className=' ms-3' src={logo} alt='logo'style={{width:'35px'}} ></img>
  </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className='navbar-toggler-icon'>
      <i className="fas fa-bars" style={{color: "#fff"}}/>
    </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto ">
      <li className="nav-item active">
        <Link className="ps-3 nav-link active text-white text-uppercase me-5" to="/">Home <i className="fas fa-home "></i> <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className=" ps-3 nav-link text-white text-uppercase me-5" to="/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="ps-3 nav-link text-white text-uppercase me-5" to="/contact">Contact us</Link>
      </li>
    </ul>
    <form className=" ps-3 row my-2 my-lg-0">
      <div className='col'>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </div>
      <div className='col'>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
  
    </form>
    </div>
  </div>
</nav>
    )
}
export default Navbar;