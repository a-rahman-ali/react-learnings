import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+=-{}[]?~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password])
  // passwordGenerator()
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-center text-white my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef}
            className='outline-none w-full py-1 px-3'
          />
          <button
            onClick={copyPasswordToClipboard}
            className='bg-blue-500 text-black'
          >Copy</button>
        </div>
        <div>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label>Include numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Include special characters</label>
        </div>
      </div>
    </>
  )
}

export default App
