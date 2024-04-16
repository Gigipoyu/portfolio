import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from './page/home';
import Projet from './page/projet';
import Signup from './page/signup';
import Login from './page/login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projet/:id" element={<Projet />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<p>Error 404</p>} />
      </Routes>
      <Footer />
    </Router>
  
    </>
  );
}

export default App;
