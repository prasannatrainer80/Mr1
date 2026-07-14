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
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/four" element={<Four />} />
          <Route path="/five" element={<Five />} />
          <Route path="six" element={<Six />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
