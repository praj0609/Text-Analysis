import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  document.body.style.backgroundColor='grey';

  return (
    <>
    <Navbar/>
    <div className="container my-3">
    <TextForm heading ="Enter the Text Below"/>
   <About/>
    </div>
   
   
  
    </>
  );
}

export default App;
