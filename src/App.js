import Home from './pages/Home/Home'
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Donate from './pages/Donate/Donate'
import Volunteer from './pages/Volunteer/Volunteer'
import Cause from './pages/Cause/Cause'
import Events from './pages/Events/Events'
import Transparency from './pages/Transparency/Transparency'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import PageNotFound from './pages/404/PageNotFound'
import SecondaryNavbar from './components/Navbar/SecondaryNavbar'
import Footer from './parts/Footer/Footer'

const App = () => {
  return (
    <div className="container-fluid m-0">
      <Navbar/>
      <SecondaryNavbar/>
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
      <Footer/>
    </div>
  );
}

export default App;
