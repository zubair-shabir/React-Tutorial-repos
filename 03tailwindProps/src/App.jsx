import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {


  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl font-semibold mb-4'>Tailwind Test</h1>
    <div className='flex justify-around'>

   <Card Username="chaiaur code" btnText="visit Profile"/>
   <Card Username="chai aur Javascript " btnText="Click this"/>
   <Card Username="chai aur react " btnText="Follow this link"/>
   <Card />
    </div>

    </>
  )
}

export default App
