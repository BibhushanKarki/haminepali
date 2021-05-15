import React from 'react'
import Home from './pages/Home/Home'
import { Route, Switch } from 'react-router-dom';
import Donate from './pages/Donate/Donate'
import Volunteer from './pages/Volunteer/Volunteer'
import Cause from './pages/Cause/Cause'
import Events from './pages/Events/Events'
import Transparency from './pages/Transparency/Transparency'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import PageNotFound from './pages/404/PageNotFound'

const Routes = () => {
  return (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path="/donate" component={Donate} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/cause" component={Cause} />
        <Route path="/events" component={Events} />
        <Route path="/transparency" component={Transparency} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
