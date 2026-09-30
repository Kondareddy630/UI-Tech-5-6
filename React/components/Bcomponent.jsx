import React from 'react'
import Ccomponent from './Ccomponent'

function Bcomponent(props) {



  return (
    <div>Bcomponent

        <ul>
            {
                props.hello.map((e)=><li>{e.empno}</li>)
            }
        </ul>

        <Ccomponent emp={props.hello}></Ccomponent>
    </div>
  )
}

export default Bcomponent