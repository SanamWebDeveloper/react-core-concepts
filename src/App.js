import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
    const friends=[ {name: 'Katrina Kaif', roll: '01'},
                    {name: 'Kira nightly', roll: '05'},
                    {name: 'Angelina Jolie', roll: '44'},
                    {name: 'Rani Mukharjee', roll: '55'},
                    {name: 'Dipika fadukon', roll: '66'}
    ];

  return (
        <div className="App">
          <header className="App-header">

            <Counter></Counter>
            <Users></Users>


            {
                friends.map(x => <Friend values= {x} > </Friend>)
            }

          </header>
      </div>
  );
}
    //component for state!
function Counter(){
    const [count, setCount] = useState(10);
    
    return(
        <div>
            <h1>Count: {count} </h1>
            <button onMouseMove={() => setCount(count+1)}>Increase</button>
            <button onMouseMove={() => setCount(count-1)}>Deccrease</button>
        </div>
    )    
}

        //Creating component (Users)
    function Users(){
        const [ users, setUsers] = useState([]);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
        }, [])
        return(
            <div>
                <h3>Dynamic Users:{users.length}</h3>
                <ul>
                    {
                        users.map(x => <li>{x.email}</li>)
                    }
                </ul>
            </div>
        )
    }

const friendStyle={
    color: 'pink',
    backgroundColor: 'green',
    border: '3px solid purple',
    borderRadius: '10px',
    margin: '8px',
    width: '300px',
}    

function Friend(props){
    //Destructuring!
    const {name, roll} = props.values;
    return(
        <div style={friendStyle}>
            <h1>Name:{props.values.name}</h1>
            <h3>Roll:{props.values.roll}</h3>
            <h5>{name +" "+ roll}</h5>
        </div>
    )
}

export default App;
