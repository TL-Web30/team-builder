import React, { useState } from 'react';
import team from './data';
import './App.css';
import TeamForm from './components/Form';
import { Container, Row } from 'reactstrap';
import CardList from "./components/CardList";
import powerGroup from "./assets/photos/powerGroup.png";


const initialFormValues ={
  id: Date.now(),
    name: '',
    stageName: '',
    power: '',
    position: '',
    insta: ''
}

function App() {
  const [members, setMembers] = useState(team);
  const [formValues, setFormValues] = useState(initialFormValues);
  

const onChangeHandler = event => {
    setFormValues({
        ...formValues,
        [event.target.name]: event.target.value
    });
};

const submitHandler = event => {
    event.preventDefault();//keeping browser from reloading
    const newMember ={
      id: Date.now(),
      name: formValues.name,
      stageName: formValues.stageName,
      power: formValues.power,
      position: formValues.position,
      insta: formValues.insta
    }
    setMembers([...members, newMember])
    setFormValues(initialFormValues)//resetting the form to empty values
};



  return (
    <div className="App">
      <header><h1>Exo Team Roster</h1></header>
      <img width='70%' id="power" src={powerGroup} />
      <Container id="top">
        <TeamForm 
        values={formValues}
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
        />
      </Container>

      <Container>
        <Row>
      {
        members.map(person => {
          return (
            <CardList key={person.id} details={person}/>
            )//map through members here and spit out into card
      })
      }
        </Row>
      </Container>

      
    </div>
  );
}

export default App;
