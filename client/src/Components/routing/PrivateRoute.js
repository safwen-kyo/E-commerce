import React , {useEffect} from "react";
import { Redirect, Route } from "react-router-dom";
import {useSelector,useDispatch } from "react-redux";
import {currentUser} from "../../JS/actions/user"
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <div>
      {token ? (
        <Route component={Component} {...rest} />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default PrivateRoute;

export const PrivateR = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token"))
   {dispatch(currentUser())}
  }, []);
  const user = useSelector(state => state.userReducer.user);
  console.log('privateroute',user)
  
  const isAuth = localStorage.getItem("token");
  if(user===null){return null}
  else if (isAuth && user.isAdmin) {
    return <Route component={Component} {...rest} />
  }
  return <Redirect to="/" />;
};
