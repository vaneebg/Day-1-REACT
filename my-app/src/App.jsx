
import './App.css';
import './components/Person/Person'
import Person from './components/Person/Person';

// Ejemplo pruebas para acceder a arrays de objetos

const people = [{id:1,name:"Vanesa", surname:"Beltran", age:27},{id:2,name:"Andrea", surname:"Diaz", age:23},{id:3,name:"Juanjo", surname:"Sanchez", age:31}];



function App() {
return (
<div className="App">
<Person info={people}/>
</div>
);
}

// Ejemplo accediendo al componente Person

// function App() {
//   return (
//     <div className="App">
     
//       <Person name="Vane" surname='Beltrán' age={27}/><br/>
//       <Person name="Andrea" surname='Diaz' age={20}/><br/>
//       <Person name="Juanjo" surname='Sanchez' age={32}/><br/>
//  {/* <Person name="Andrea"/>  */}
//       {/* <Person surname="Beltrán"/> */}
//       {/* <Person surname="Diaz"/> */}
//       {/* <Person age={16}/> */}
//      {/* Uno por uno no, porque se repite  */}
    
//     </div>
//   );
// }

export default App;
