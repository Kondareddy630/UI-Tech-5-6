import React from 'react'

function Ccomponent(props) {


  return (
    <div>Ccomponent
        <ul>
            {
                props.emp.map((e)=>
                <li>{e.empno},{e.name} ,{e.job},{e.salary}</li>

               )
            }
        </ul>
    </div>
  )
}

export default Ccomponent