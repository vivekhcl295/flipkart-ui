import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import PlaceOrder from "./pages/PlaceOrder";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path={'/'} render={() => {
                return <Redirect to={'/products'} />
              }} />
              <Route exact path={'/products'} component={Home} />
              <Route exact path={'/products/:id'} component={ProductDetail} />
              <Route exact path={'/cart'} component={ShoppingCart} />
              <Route exact path={'/checkout/address'} component={PlaceOrder} />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
