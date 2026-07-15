import logo from './logo.svg';
import './App.css';
import UserShow from './components/usershow/usershow';
import UserSearch from './components/usersearch/usersearch';
import PostShow from './components/postshow/postshow';
import PostSearch from './components/postsearch/postsearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Menu />} /> 
           <Route path="/usershow" element={<UserShow />} />
           <Route path="/usersearch" element={<UserSearch />} />
           <Route path="/postshow" element={<PostShow />} /> 
           <Route path="/postsearch" element={<PostSearch />} />       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
