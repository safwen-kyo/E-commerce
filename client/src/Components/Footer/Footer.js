import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
function Footer() {
    return (
        <div>
             <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
          <div className="row my-5 justify-content-center py-5">
            <div className="col-11">
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                  <h3 className="text-muted mb-md-0 mb-5 bold-text"> Barbech.</h3>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                  <ul className="list-unstyled">
                   <Link  to="/"><span><li>Home</li></span></Link>
                   <Link to="/about"><span><li>About Us</li></span> </Link>
                   <Link to="/register"><span><li>Register</li></span> </Link>
                   <Link to="/login"><span><li>Login</li></span> </Link>
                  </ul>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>Catégories</b></h6>
                  <ul className="list-unstyled">
                   <Link><span><li>Photo & Caméra</li> </span> </Link> 
                   <Link><span><li>Image & Son </li></span></Link> 
                   <Link><span><li>Electroménager</li> </span> </Link> 
                   <Link><span><li>Téléphonie</li></span></Link> 
                   <Link><span><li>Informatique</li></span></Link>
                  </ul>
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true" /></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true" /></span> </p><small className="rights"><span>®</span> Barbech All Rights Reserved.</small>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h6 className="mt-55 mt-2 text-muted bold-text"><b>TOUMIA SAFWEN</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true" /></span>safwanetoumia@gmail.com</small>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                  <h6 className="text-muted bold-text"><b>AHMED AKERMI</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true" /></span>ahmedakermi@gmail.com</small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
        </div>
    )
}

export default Footer
