import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Pages/Home';
import Doctors from './Pages/Doctors';
import Singledoctor from './Pages/Singledoctor';
import Department from './Pages/Department';
import Singledepartment from './Pages/Singledepartment';

function App() {
  return (
    <div>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/department/:id' element={<Singledepartment/>}/>
        <Route path='/doctor' element={<Doctors/>}/>
        <Route path='/doctor/:id' element={<Singledoctor/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
