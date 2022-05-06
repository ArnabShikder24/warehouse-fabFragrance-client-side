import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Inventory from './components/Inventory/Inventory';
import Manage from './components/Manage/Manage';
import Navigation from './components/Navigation/Navigation';
import Wellcome from './components/Wellcome/Wellcome';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Maintain from './components/Maintain/Maintain';
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div className="App">
          <Wellcome></Wellcome>
          <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/inventory' element={<Inventory></Inventory>}></Route>
            <Route path='/inventory/manage/:manageId' element={<RequireAuth><Manage></Manage></RequireAuth>}></Route>
            <Route path='/manage-inventory' element={<RequireAuth><Maintain></Maintain></RequireAuth>}></Route>
            <Route path='/add-item' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
          </Routes>
          <Footer></Footer>
          <ToastContainer />
    </div>
  );
}

export default App;
