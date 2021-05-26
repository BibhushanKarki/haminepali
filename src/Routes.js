import React from "react";
import Home from "./pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Donate from "./pages/Donate/Donate";
import Volunteer from "./pages/Volunteer/Volunteer";
import Cause from "./pages/Cause/Cause";
import Events from "./pages/Events/Events";
import EventExtended from "./pages/EventExtended";
import UpComingEvent from "./pages/UpComimgEvent";
import Transparency from "./pages/Transparency/Transparency";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Fundraiser from "./pages/Fundraiser/Fundraiser";
import Food from "./pages/Food/Food";
import Health from "./pages/Health/Health";
import Education from "./pages/Education/Education";
import Clothing from "./pages/Clothing/Clothing";
import Covid from "./pages/Covid/Covid";
import Housing from "./pages/Housing/Housing";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import WhyHamiNepal from "./pages/WhyHamiNepal/WhyHamiNepal";
import BehindTheName from "./pages/BehindTheName/BehindTheName";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TransparencyDetail from "./pages/TransparencyDetail/TransparencyDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DonateAdministration from "./pages/DonateAdministration";
import FundRaiserDescription from "./pages/FundRaiserDescription/FundRaiserDescription";
import VolunteerSignUp from "./pages/VolunteerSignUp";
import OurCommunity from "./pages/OurCommunity/OurCommunity";
import DonateAnonymouslySection from "./components/DonateAnonymouslySection";
import PageNotFound from "./pages/404/PageNotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/donate" component={Donate} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/cause" component={Cause} />
      <Route path="/events" component={Events} />
      <Route path="/event-extended" component={EventExtended} />
      <Route path="/upcoming-event" component={UpComingEvent} />
      <Route path="/transparency" component={Transparency} />
      <Route path="/community" component={OurCommunity} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/fundraisers" component={Fundraiser} />
      <Route path="/covid" component={Covid} />
      <Route path="/food" component={Food} />
      <Route path="/health" component={Health} />
      <Route path="/education" component={Education} />
      <Route path="/clothing" component={Clothing} />
      <Route path="/housing" component={Housing} />
      <Route path="/howitworks" component={HowItWorks} />
      <Route path="/whyhaminepal" component={WhyHamiNepal} />
      <Route path="/behindthename" component={BehindTheName} />
      <Route path="/successstories" component={SuccessStories} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/transparencydetail" component={TransparencyDetail} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/donate-administration" component={DonateAdministration} />
      <Route path="/fundraiserdescription" component={FundRaiserDescription} />
      <Route path="/volunteer-signup" component={VolunteerSignUp} />
      <Route path="/donate-anonymously" component={DonateAnonymouslySection} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
