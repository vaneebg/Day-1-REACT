
import './App.css'; 
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import image from './components/Main/assets/titan.jpg';
import Contact from "./components/Contact/Contact"

const learned=['Javascript','NodeJS','React','Express','MySQL','MongoDB']
const contact=['About me','Contact','More info']

function App() {
  return (
    <div className="App">
    <Header title='Página web Personal' info='Created at ...'/>
    <div className="main">
   <Navbar title='Tecnologías' array={learned}/>
 
   <Main aboutme='Cursando FullStack developer en The Bridge'  img= {image}/>

   <Contact array={contact}/>
   </div>
  
    </div>
  );
}

export default App;
