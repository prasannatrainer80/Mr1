import logo from './logo.svg';
import './App.css';
import UserShow from './components/usershow/usershow';
import UserSearch from './components/usersearch/usersearch';
import PostShow from './components/postshow/postshow';
import PostSearch from './components/postsearch/postsearch';

function App() {
  return (
    <div className="App">
      <UserShow />
      <hr/>
      <UserSearch />
      <hr/>
      <PostShow />
      <hr/>
      <PostSearch />
    </div>
  );
}

export default App;
