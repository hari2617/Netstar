import React from 'react'
import { useNavigate } from 'react-router'
 
 

const PageNotFound = () => {

  const navigate=useNavigate();

  return (
    <main className='max-w-7xl'>
      <div className='mx-auto text-center'>
        <img src='https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png' className='h-[520px] w-[940px] mt-6 mx-auto'/>
      <div >
        <button onClick={()=>{navigate("/")}}  className='bg-blue-700 text-amber-50 font-bold rounded-3xl mt-4 p-4 mx-auto cursor-pointer'>Back to Home</button>
      </div>
      </div>
      
    </main>
  )
}

export default PageNotFound