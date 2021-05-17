<<<<<<< HEAD
import React from "react";
import Home from "./pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Donate from "./pages/Donate/Donate";
import Volunteer from "./pages/Volunteer/Volunteer";
import Cause from "./pages/Cause/Cause";
import Events from "./pages/Events/Events";
import Transparency from "./pages/Transparency/Transparency";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Fundraiser from "./pages/Fundraiser/Fundraiser";
import Food from "./pages/Food/Food";
import Health from "./pages/Health/Health";
import Education from "./pages/Education/Education";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import WhyHamiNepal from "./pages/WhyHamiNepal/WhyHamiNepal";
import BehindTheName from "./pages/BehindTheName/BehindTheName";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageNotFound from "./pages/404/PageNotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/donate" component={Donate} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/cause" component={Cause} />
      <Route path="/events" component={Events} />
      <Route path="/transparency" component={Transparency} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/fundraisers" component={Fundraiser} />
      <Route path="/food" component={Food} />
      <Route path="/health" component={Health} />
      <Route path="/education" component={Education} />
      <Route path="/howitworks" component={HowItWorks} />
      <Route path="/whyhaminepal" component={WhyHamiNepal} />
      <Route path="/behindthename" component={BehindTheName} />
      <Route path="/successstories" component={SuccessStories} />
      <Route path="/successstories" component={SuccessStories} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={PageNotFound} />
    </Switch>
  );
=======
import Home from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Donate from './pages/Donate/Donate';
import Volunteer from './pages/Volunteer/Volunteer';
import Cause from './pages/Cause/Cause';
import Events from './pages/Events/Events';
import Transparency from './pages/Transparency/Transparency';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Fundraiser from './pages/Fundraiser/Fundraiser';
import Covid from './pages/Covid/Covid';
import Food from './pages/Food/Food';
import Health from './pages/Health/Health';
import Education from './pages/Education/Education';
import Housing from './pages/Housing/Housing';
import Clothing from './pages/Clothing/Clothing';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import WhyHamiNepal from './pages/WhyHamiNepal/WhyHamiNepal';
import BehindTheName from './pages/BehindTheName/BehindTheName';
import SuccessStories from './pages/SuccessStories/SuccessStories';
import PageNotFound from './pages/404/PageNotFound';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' component={Home} exact />
			<Route path='/donate' component={Donate} />
			<Route path='/volunteer' component={Volunteer} />
			<Route path='/cause' component={Cause} />
			<Route path='/events' component={Events} />
			<Route path='/transparency' component={Transparency} />
			<Route path='/aboutus' component={AboutUs} />
			<Route path='/contactus' component={ContactUs} />
			<Route path='/fundraisers' component={Fundraiser} />
			<Route path='/covid' component={Covid} />
			<Route path='/food' component={Food} />
			<Route path='/health' component={Health} />
			<Route path='/education' component={Education} />
			<Route path='/housing' component={Housing} />
			<Route path='/clothing' component={Clothing} />
			<Route path='/howitworks' component={HowItWorks} />
			<Route path='/whyhaminepal' component={WhyHamiNepal} />
			<Route path='/behindthename' component={BehindTheName} />
			<Route path='/successstories' component={SuccessStories} />
			<Route component={PageNotFound} />
		</Switch>
	);
>>>>>>> 89f5079f632c8805b8afd221e7a0a78271e7c9e7
};

export default Routes;
