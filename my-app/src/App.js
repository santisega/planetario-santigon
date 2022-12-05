import logo from './logo.svg';
import Header from './components/layout/header';
import Home from './views/home';
import './App.css';
/* import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'; */

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Home></Home>
    </div>
  );
}

export default App;