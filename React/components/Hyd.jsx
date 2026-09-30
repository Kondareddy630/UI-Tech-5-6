import React, { useContext } from 'react'
import { myContext } from './App'

function Hyd() {

    let username=useContext(myContext);

  return (
    <div>Hyd

        <h2>{username}</h2>
    </div>
  )


  
}

export default Hyd