import { useState,useCallback, useEffect,useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // ref hook

  const passwordRef = useRef(null);


  const passwordGenerator= useCallback(() =>{
    let generatedPass='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz';
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+~`"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      generatedPass+=str[char];
      
    }
    setPassword(generatedPass)

  },[length,numberAllowed,charAllowed,setPassword])
  
const copyPasswordtoClipboard = useCallback(() => {
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,5)
  window.navigator.clipboard.writeText(password);

} , [password])



  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-500 bg-gray-800">
    
        <h2 className='text-white text-center my-3'>Password Generator</h2>
      <div className="flex  shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
         />
         <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
onClick={copyPasswordtoClipboard}
         >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min={8}
          max={30}
          value={length}
          className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length {length}</label>

        </div>
        <div className="flex items-center gap-x-1">
        <input type="checkbox" id="numberInput"
        defaultChecked={numberAllowed}
        onChange={() => {
          setnumberAllowed((prev) => !prev)
        }} />
        <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input type="checkbox" id="charInput"
        defaultChecked={numberAllowed}
        onChange={() => {
          setcharAllowed((prev) => !prev)
        }} />
        <label htmlFor='charInput'>characters</label>
        </div>
      </div>
      </div>
      

    </>
  )
}

export default App
