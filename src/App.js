import  Nav  from './Components/Nav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Person from './Pages/Person';
import PersonDetail from './Pages/PersonDetail';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (

    <BrowserRouter>
 <Nav />
    <Header />
    <Routes>
      <Route exact path='/' element= {<Home />} />
      <Route path='/About' element= {<About />} />
      <Route path='/About/:id' element= {<About />} />
      <Route path='/Person' element= {<Person />} >
        <Route path="" element= {<PersonDetail />}/>
      </Route>
      <Route path='/Contact' element= {<Contact />} />

    </Routes>
    <Footer />
</BrowserRouter>
   
  );
}

export default App;
