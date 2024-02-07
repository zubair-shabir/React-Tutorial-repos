import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#000')

  return (
    <div
     className='w-full h-screen duration-200'
     style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap gap-3 justify-center shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button style={{backgroundColor: 'red'}} onClick={() => setColor('red')}
             className="outline-none px-4 py-4 rounded-full text-white shadow-lg" />
             <button style={{backgroundColor: 'gray'}} onClick={() => setColor('gray')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" />
             <button style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" />
             <button style={{backgroundColor: 'black'}} onClick={() => setColor('black')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" />
             <button style={{backgroundColor: 'green'}} onClick={() => setColor('green')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" />
             <button style={{backgroundColor: 'olive'}} onClick={() => setColor('olive')}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" />
          </div>
        </div>
    </div>
  )
}

export default App
