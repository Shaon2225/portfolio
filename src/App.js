import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Navigation from './navigation/Navigation';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Profile></Profile>
    </div>
  );
}

export default App;
