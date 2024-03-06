import './App.css';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>

        <Route element ={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>} />
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/update/:id' element={<UpdateProduct/>} />
        <Route path='/logout' element={ <h1> Logout component </h1>} />
        <Route path='/profile' element={ <h1> Profile component </h1>} />
        </Route>
        
        <Route path='/SignUp' element={ <SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
