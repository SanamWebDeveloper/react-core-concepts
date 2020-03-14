import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var n1 = "Dr. Mahfuz";
  var n2 = {
    name: "Eva Rahman",
    position:"Head of DM",
    Known: "Singer"
  }
  // var human = {
  //   name: "Dr. Mahfuz",
  //   job: "Singer",
  //   id: 70,
  //   Htitle: "Boss"
  // }
  // var human2= {
  //   name: "Eva Rahman",
  //   job: "Kokil konthi"
  // }

  // var style = {
  //   color: "red",
  //   backgroundColor: "skyBlue"
  // }
  
  var herStyle={
    color: 'pink'
  }
  var hisStyle={
    color: 'red',
    backgroundColor: 'Yellow'
  }

  return (
        <div className="App">
          <header className="App-header">
            {/* <p>I am a React person!</p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit Done 333! <code>src/App.js</code> and save to reload.
            </p>

            <h1 className="heading" style={style}>My Heading: {human.name + " " + human.job} </h1>
            <h3 style={{backgroundColor:'blue'}}>Singer: {human2.name + " " + human2.job}</h3>
            <p>My first react paragraph!</p> */}

          <h1 style={hisStyle}> Here is: {n1}</h1>
          <h2 className="" style={herStyle}>Here is also: {n2.name + " " + n2.position}</h2>
            <p style={{color:'purple', backgroundColor:'cyan'}}>Their Spouse!</p>
            <Person></Person>
            <Person></Person>
            <Person>HElloo</Person>

            <p>I am a react person!!</p>
        </header>
      </div>
  );
}

function Person(){
  return (
  <div>
    <h1>Name: Sakib All Hasan.</h1>
    <h3>Little Sakib!</h3>
    <h5>Shishir is watching!</h5>
  </div>
  )
}

export default App;
