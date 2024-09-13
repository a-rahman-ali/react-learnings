// import './App.css'
import { useState } from 'react';
import Card from './components/Card'

function App() {

  const [user, setUser] = useState('');
  let [counter, setCounter] = useState(10);
  var count = 0;

  const add = () => {
    setCounter(counter + 1);
    console.log(counter);
  }
  // const user = {
  //   name: 'Afrooz',
  //   age: 23
  // };
  return (
    <>
      {/* <Card {...user} /> */}
      <button onClick={add}>Add</button>
      <p>{counter}</p>
    </>
  )
}

export default App
