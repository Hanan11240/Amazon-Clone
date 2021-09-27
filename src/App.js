import React , {useEffect} from 'react';
import { auth } from "./firebase";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Home";
import Header from "./Header"
import Login from './Login';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import Checkout from './Checkout';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51JRZkdSEFgSoqIKjCLlJZxFVPRitRVWQfeCsJBGca8OwjuCRVJ2ytR8odXoECjt5FSNxwxWocRMeH5dutTaL45hv00CCkuNK01');




const App = () => {
  const [{}, dispatch] =useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe= {promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />  
          </Route>  
        </Switch>  
      </Router>      
    </div>
  )
}

export default App;
