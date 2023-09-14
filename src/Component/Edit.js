import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function Edit() {
    const navi =useNavigate()
    const data =useLocation().state.index;
    console.log(data)
  return (
    <>
    <div>Edit</div>
    <button onClick={()=>{navi('/student')}}>Go back</button>
    </>
  )
}

export default Edit