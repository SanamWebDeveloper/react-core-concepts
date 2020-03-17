import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   const nayoks = ['Soad', 'Shakib', 'Mashrafi', 'shuvo', 'jasim', 'rubel'];
  const products = [ { name:'Photoshop',  price: '$99.99'},
                     { name:'Illustrator',price: '$88.88' },
                     { name:'Lightroom',  price: '$33.99'},
                     { name:'AdobeInDes', price: '$50.50'},
                     { name: 'DreamWav',  price: '$70.70'}
  ];
  
    {/*// map diye array of objects theke sudhu nam gulo niye arekta new array banaite hobe. */}
  const Result = products.map(x => x.name);
  console.log("All Products Name:", Result);

  const Result2 = products.map(x => x.price);
  console.log("Price er array:", Result2);

  const Result3 = nayoks.map(x => x);
  console.log("nayokder nam:", Result3);

  return (
    <div className="App">
      <header className="App-header">

          {
            products.map(x => <Product values={x}></Product>)
          }

            {/* <Product packet= {products[1]}></Product>
            <Product packet= {products[2]}></Product> */}
           
          {/* <h1>Hello there</h1>

          {/* <Person name= {nayoks[0]} job='Student'></Person>
          <Person name= {nayoks[1]} job='cricketer'></Person>
          <Person name= {nayoks[2]} job='cricketer'></Person> */}

          {/* <p>I am a react person!!</p> */}
        
        <ul>
          {
            nayoks.map( x => <li> {x} </li>)
          }
          {
            products.map(x => <li> {x.name} </li>)
          }
          {
            products.map(x => <li> {x.price} </li>)
          }
        </ul>

      </header>
    </div>
  );
}




      //creating component 2
  function Product(props){
    const productStyle={
      color: 'Black',
      backgroundColor: 'white',
      border: 'gray',
      borderRadius: '2px',
      margin:'8px',
      width: '300px',
    }


      //Destructuring:
      console.log("WHAT?", props);
    const {name, price} = props.values;
    return(
      <div style={{border:'3px solid red', margin:'5px'}}>
        <div style={productStyle}>
          <h1>LOGO</h1>
          <h3> {name} </h3>  {/* <h3>{props.name}</h3>// <h3> {props.packet.name} </h3> */}
          <p>Price: {price}</p>
          <p>PRICE: {props.values.price}</p>

          <a href="abc@gmail.conm">Start free trail</a> <br/>
          <button> Buy now</button>
        </div>
      </div>
    )
  }    










      //creating component:
  // function Person(props){
  //             //creating style like an object.
  //   const personStyle={
  //     color:'yellow',
  //     backgroundColor: 'gray',
  //     margin: '10px',
  //     border: '2px solid red',
  //     borderRadius: '10px'
  //   }
  //   return(
  //     <div style={personStyle}>
  //       <h3>Name: {props.name  + ' ' + props.job}</h3>
  //     </div>
  //   )  
  // }



export default App;
