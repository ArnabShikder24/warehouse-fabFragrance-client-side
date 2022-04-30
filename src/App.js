import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory/Inventory';
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
          </Routes>
    </div>
  );
}

export default App;
