import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Social from './components/Social'
import Header from './components/Header'
import About from './components/About'
import Adventages from './components/Adventages'

function App() {
  return (
    <>
      <div className='main'>
        <Menu />
        <Social />
        <Header />
        <About / >
        <Adventages />
      </div>
    </>
  );
}

export default App;
