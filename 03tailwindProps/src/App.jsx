import './App.css'
import Card from './components/Card'

function App() {

  // let myObj = {
  //   username: 'abdul',
  //   age: 21
  // }
  // let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      {/* <Card channel='ChaiAurCode' myObject={myObj} myArr={newArr} /> */}
      <Card username="Melinda" />
      <Card username="Tempa" btnText="Visit Profile" />
    </>
  )
}

export default App
