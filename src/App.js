import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Inventory from './components/Inventory/Inventory';
import Manage from './components/Manage/Manage';
import Navigation from './components/Navigation/Navigation';
import Wellcome from './components/Wellcome/Wellcome';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
          <Wellcome></Wellcome>
          <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/inventory' element={<Inventory></Inventory>}></Route>
            <Route path='/inventory/manage' element={<Manage></Manage>}></Route>
          </Routes>
          <Footer></Footer>
    </div>
  );
}

export default App;
