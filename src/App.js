import './App.css';
import { Route,Router,BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
