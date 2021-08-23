import ProductList from "./Components/Products/ProductList";
import { Switch, Route, Link } from "react-router-dom";
import Main from "./Components/Main/Main"
import Add from "./Components/AdminUser/Add";
import AdminProductList from "./Components/AdminUser/AdminProductList";
import PrivateRoute from "./Components/routing/PrivateRoute";
import { PrivateR } from "./Components/routing/PrivateRoute";
import Signup from "./Components/signup/Signup";
import Signin from "./Components/signin/Signin";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./JS/actions/user";
import React, { useState, useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentUser());
    }
  }, []);

  useEffect(() => {
    if (user !== null) {
    }
  }, [user]);

  return (
    <div className="app">
      {/*<h4>COMPARTEUR DES PRIX</h4>
      <Search />

      <Route path="/">
        <Link to="/login">
          <button>Signin</button>
        </Link>
        <Link to="/register">
          <button>Signup</button>
      </Link > 
      </Route> */}
      <Header />
      
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        {/*<Route path="/" />*/}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateR exact path="/admin" component={AdminProductList} />
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/admin" component={AdminProductList} /> */}
        <PrivateR exact path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
