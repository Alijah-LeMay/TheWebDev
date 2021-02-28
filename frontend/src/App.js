import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StyleRoot } from 'radium'
// Redux
import { Provider } from 'react-redux'
import store from './store'

import './App.module.css'

// My Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { useTracking } from './components/utils/useTracking'
import ScrollToTop from './components/utils/ScrollToTop'

// My Screens
import LoginScreen from './screens/LoginScreen'
import ServicesScreen from './screens/ServicesScreen'
import OurWorkScreen from './screens/OurWorkScreen'
import QuoteScreen from './screens/QuoteScreen'
import HomeScreen from './screens/HomeScreen'
import AdminScreen from './screens/AdminScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import ThankYouScreen from './screens/ThankYouScreen'
import BlogScreen from './screens/BlogScreen'
import EditBlogScreen from './screens/EditBlogScreen'
import EditSiteScreen from './screens/EditSiteScreen'
import EditCourseScreen from './screens/EditCourseScreen'
import BlogPostScreen from './screens/BlogPostScreen'

// Still testing
import CourseScreen from './screens/CourseScreen'
import CoursePostScreen from './screens/CoursePostScreen'

export const App = () => {
  useTracking('G-F35LSG5NHY')
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/login' component={LoginScreen} />
        <Route exact path='/services' component={ServicesScreen} />
        <Route exact path='/quote' component={QuoteScreen} />
        <Route exact path='/ourwork' component={OurWorkScreen} />
        <Route exact path='/thankyou' component={ThankYouScreen} />
        {/* <Route exact path='/privacy' component={PrivacyPolicyScreen} /> */}
        <Route exact path='/blog' component={BlogScreen} />
        <Route exact path='/blog/:id' component={BlogPostScreen} />
        <Route exact path='/admin' component={AdminScreen} />
        <Route exact path='/admin/site/:id/edit' component={EditSiteScreen} />
        <Route exact path='/admin/blog/:id/edit' component={EditBlogScreen} />
        <Route
          exact
          path='/admin/course/:id/edit'
          component={EditCourseScreen}
        />
        {/* Still Testing */}
        <Route exact path='/course' component={CourseScreen} />
        <Route exact path='/course/:id' component={CoursePostScreen} />

        <Route component={NotFoundScreen} />
      </Switch>
      <Footer />
    </>
  )
}

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <StyleRoot>
        <App />
      </StyleRoot>
    </BrowserRouter>
  </Provider>
)
