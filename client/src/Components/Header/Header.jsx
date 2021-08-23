import React , { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../JS/actions/user"
import "./Header.css"
const  Header =() =>{
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth =localStorage.getItem('token')
  const user = useSelector(state => state.userReducer.user)

  const authLinks = (
    <ul>
      <li>
          <span className="hide-sm" >{`Welcome ${user.name}`}</span>
      </li>

       <li>
        <Link to="/" className="active">Home</Link>
      </li>
      
      
      {user ? user.isAdmin === true && <li>
        <Link to="/admin">Add Products</Link>
      </li> : null}
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/" onClick={() => {
          dispatch(logout());
          history.push("/");
        }}>
          <i className="fas fa-sign-out-alt" />{''}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
      
    </ul>
    
  );

  const guestLinks = (

    <ul>
    <li>
      <Link exact to="/" className="active">Home</Link>
    </li>
    <li>
      <Link to="/about">About Us</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>
  );

    return (
        <div>
          <nav className='navbar bg-dark'>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
        </label>
        <label className="logo">   <h1>
          <Link to='/'>
             <span className="logo">Barbech</span>
        </Link>
        </h1></label>

        <Fragment>{isAuth ? authLinks : guestLinks}</Fragment>
      </nav>
      {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Barbech</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Fragment>{isAuth ? authLinks : guestLinks}</Fragment>
    </Container>
    </Navbar>*/}
    </div>   
    )
}

export default Header
