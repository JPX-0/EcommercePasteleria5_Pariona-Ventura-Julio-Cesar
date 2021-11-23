import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/main/details/ItemDetailContainer"
import Cart from './components/main/Cart';
import Error404 from './components/main/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/css/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <NavBar/>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/item/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/*" element={<Error404/>}/>
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  )};
export default App;
