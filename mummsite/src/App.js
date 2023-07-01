import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="w-100 h-100 bg-info">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
