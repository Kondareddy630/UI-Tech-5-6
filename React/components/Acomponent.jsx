import React from 'react'
import Bcomponent from './Bcomponent'

function Acomponent(props) {


  return (
    <div>Acomponent

        <ul>
            {
                props.emp.map((e)=><li>{e.empno}</li>)
            }
        </ul>

        <Bcomponent hello={props.emp}></Bcomponent>
    </div>
  )
}

export default Acomponent