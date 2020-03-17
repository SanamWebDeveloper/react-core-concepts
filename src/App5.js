import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
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
  
  // var herStyle={
  //   color: 'pink'
  // }
  // var hisStyle={
  //   color: 'red',
  //   backgroundColor: 'Yellow'
  // }
  const nayoks=['Anwar', 'Jafor', 'Alamgir', 'Salman']; //array
  const products=[
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$80.88'},
    {name: 'DreamWv', price: '$60.66'}
  ];                                       //Object er arry!
  return (
        <div className="App">
          <header className="App-header">
            <Products product={products[0]}></Products>
            <Products product={products[1]}></Products>
            <Products product={products[2]}></Products>
            <Products></Products>
            <Products></Products>



            <Person name={nayoks[0]} name2="Moushumi"></Person>
            <Person name={nayoks[1]} name2="Shabana"></Person>
            <Person name="Bappa" name2="Cheka"></Person>
            <Person name="EliasK"name2="Diti"></Person>

            <p>I am a react person!!</p>

            <Person2 name= "rahim" profession='Cricketer'></Person2>
            <Person2 name="Karim"  profession='Ticket seller'></Person2>
            <Person2></Person2>
        </header>
      </div>
  );
}

function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Nayok: {props.name} </h1>
      <h2>Naika: {props.name2}</h2>
      <h5>Hero of {props.name}</h5>      
    </div>
  )
}


    //Creating COMPONENT!
function Person2(props){
  const person2Style = {
    border:'5px solid green',
    color: 'cyan',
    width:'600px'
  }
  return(
    <div style = {person2Style}>
      <h1>My Name:{props.name}</h1>
      <h3>My Frofession:{props.profession}</h3>
    </div>
  )
}

function Products(props){
  const productsStyle={
    width:'200px',
    height:'200px',
    backgroundColor:'gray',
    border:'5px solid red',
    borderRadious: '5px',
    float: 'left',
  }

  return(
    <div style={productsStyle}>
      <h2> NAME:</h2>
       <h1>Price:</h1>
      <p>Description:</p>
      <a href="https://www.kajhjkf.com">start free trial</a>
      <button>Buy now</button>
    </div>
  )
}

export default App;
