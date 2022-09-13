import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import OrderReveiw from './components/OrderReveiw/OrderReveiw';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Shop></Shop>} />
        <Route path="/orderReveiw" element={<OrderReveiw></OrderReveiw>} />
      </Routes>


    </div>
  );
}

export default App;
