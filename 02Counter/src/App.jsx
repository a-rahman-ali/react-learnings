import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 15;

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("Value added: ", Math.random());
    // if (counter < 20) {
    //   setCounter(counter + 1);
    // }
    // counter++;
    // setCounter(counter);
    // console.log("New Counter Value: ", counter);

    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
  }

  const removeValue = () => {
    // console.log("Value removed: ", Math.random());
    // if (counter > 0) {
    //   setCounter(counter - 1);
    // }

    if (counter > 0) {
      counter--;
      setCounter(counter);
      console.log("New Counter Value: ", counter);
    }

    // counter--;
    // setCounter(counter);
    // console.log("New Counter Value: ", counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <br /> <br />
      <button
        onClick={removeValue}
      >Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
