import './App.css'
import Navbar from './components/Navbar/Navbar'
import SecondaryNavbar from './components/Navbar/SecondaryNavbar'
import Routes from './Routes'
import Footer from './parts/Footer/Footer'

const App = () => {
  return (
    <div className="container-fluid m-0">
      <Navbar/>
      <SecondaryNavbar/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
