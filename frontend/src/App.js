import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// My Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// My Screens
import LoginScreen from './screens/LoginScreen';
import ServicesScreen from './screens/ServicesScreen';
import BlogScreen from './screens/BlogScreen';
import OurWorkScreen from './screens/OurWorkScreen';
import QuoteScreen from './screens/QuoteScreen';
import LandingScreen from './screens/LandingScreen';
import AdminScreen from './screens/AdminScreen';
import EditSiteScreen from './screens/EditSiteScreen';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/admin' component={AdminScreen} />
          <Route exact path='/admin/site/:id/edit' component={EditSiteScreen} />
          <Route exact path='/services' component={ServicesScreen} />
          <Route exact path='/quote' component={QuoteScreen} />
          <Route exact path='/ourwork' component={OurWorkScreen} />
          <Route exact path='/blog' component={BlogScreen} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
