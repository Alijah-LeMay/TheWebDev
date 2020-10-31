import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StyleRoot } from 'radium';
// Redux
import { Provider } from 'react-redux';
import store from './store';

// My Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// My Screens
import LoginScreen from './screens/LoginScreen';
import ServicesScreen from './screens/ServicesScreen';
import OurWorkScreen from './screens/OurWorkScreen';
import QuoteScreen from './screens/QuoteScreen';
import LandingScreen from './screens/LandingScreen';
import AdminScreen from './screens/AdminScreen';
import EditSiteScreen from './screens/EditSiteScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import ThankYouScreen from './screens/ThankYouScreen';
// import BlogScreen from './screens/BlogScreen';
// import EditBlogScreen from './screens/EditBlogScreen';
// import BlogPostScreen from './screens/BlogPostScreen';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StyleRoot>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingScreen} />
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/admin' component={AdminScreen} />
            <Route
              exact
              path='/admin/site/:id/edit'
              component={EditSiteScreen}
            />
            <Route exact path='/services' component={ServicesScreen} />
            <Route exact path='/quote' component={QuoteScreen} />
            <Route exact path='/ourwork' component={OurWorkScreen} />
            <Route exact path='/thankyou' component={ThankYouScreen} />
            <Route component={NotFoundScreen} />
            {/* <Route exact path='/privacy' component={PrivacyPolicyScreen} /> */}
            {/* <Route exact path='/blog' component={BlogScreen} /> */}
            {/* <Route exact path='/blog/:id' component={BlogPostScreen} /> */}
            {/* <Route
              exact
              path='/admin/blog/:id/edit'
              component={EditBlogScreen}
            /> */}
          </Switch>
          <Footer />
        </Fragment>
      </StyleRoot>
    </BrowserRouter>
  </Provider>
);

export default App;
