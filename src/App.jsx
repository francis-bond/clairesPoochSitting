import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import ContactUs from './components/pages/ContactUs/ContactUs'
import Services from './components/pages/Services/Services'
import AboutUs from './components/pages/AboutUs/AboutUs'
import Navbar from './components/Navbar/Navbar'
import React,{ useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutUs') {
      return <AboutUs />;
    }
    if (currentPage === 'ContactUs') {
      return <ContactUs />;
    }
    return <Services />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="w-100 h-100">
      <Header/>
      <Navbar currentPage = {currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;
