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

           

            <Calculator></Calculator>
            <Taxer></Taxer>
            <Counter></Counter>
            <Users></Users>


            {
                friends.map(x => <Friend values= {x} > </Friend>)
            }

            <Post></Post>   
            <Photos></Photos>
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


                //My Test COMPONENT, creating Button for testing mouse event handler and changing state!

                function Calculator(){
                    const [ calculate, setCalculate] = useState(20);
                    return(
                        <div>
                            <h1>INITIAL: {calculate} </h1>
                            <h1>TEST mouse event hadler n STATE</h1>
                            <button onClick={() => setCalculate(calculate+1)}>TIPO</button>
                            <button onClick={() => setCalculate(calculate-1)}>Komao</button>
                        </div>
                    )
                }

                //abar ekta component for State n mosuevent handler!

                function Taxer(){
                    const [tax, setTax] = useState(0);
                    return(
                        <div>
                            <h1>Testing Mouse event n State!</h1>
                            <h2>Value:{tax}</h2>
                            <button onClick={() => setTax(tax+1)}> MORE </button>
                            <button onClick={() => setTax(tax-1)}> Less </button>
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


        //Taking data from Backend and process it by useEffect and useState!

        function Photos(){
            const [photo, setPhoto] = useState([]);
            useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/photos')
                .then( res => res.json())
                .then( data => setPhoto(data));
            }, [])

            return(
                <div>
                    <h1>My all Photo data!</h1>
                    <h2>Dynamic Photos: {photo.length}</h2>
                    <ul>
                        {photo.map(x => <li>{x.thumbnailUrl}</li>)}
                    </ul>
                </div>
            )

        }

        //COMPONENT for taking data from BACKEND.
    function Post(){
        const [post, setPost] = useState([]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
        }, [])

        return(
            <div>
                <h1>MY ALL POST DATA!</h1>
                <h2>Total Number: {post.length} </h2>
            
                {console.log(post)}
            </div>
        )
    }



export default App;
