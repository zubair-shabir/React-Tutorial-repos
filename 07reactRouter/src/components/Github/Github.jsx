import React, { useState,useEffect } from 'react'
import {useLoaderData} from "react-router-dom"


const Github = () => {
    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //   fetch('https://api.github.com/users/zubair-shabir')
    //   .then(res => res.json())
    //   .then(d => {
    //     console.log(data)
    //     setData(d)
    //   })
    
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data?.followers}
        <img src={data?.avatar_url} className='w-[300px]' alt="Git Picture" />
     </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response= await fetch('https://api.github.com/users/zubair-shabir')

   return response.json();
}