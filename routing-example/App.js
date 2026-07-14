import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import Four from './components/four/four';
import Five from './components/five/five';
import Six from './components/six/six';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
