
// import React from "react";

// class Person extends React.Component {
//     render() {
//     return <div><span>Hello {this.props.name}, your surname is {this.props.surname} and your age is {this.props.age}</span></div>
//     }
//     }


const Person = ({info}) => {
  // console.log(info)
  const listPeople = info.map((person) => <span key={person.id}>Your name {person.name}, your surname {person.surname} and age {person.age}<br/></span>);
  return (
    <div>{listPeople}</div> 
    
      
    )
  }
  
  export default Person