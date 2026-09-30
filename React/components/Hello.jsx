import React from 'react'

function Hello(props) {

console.log(props);

  return (
    <div>Hello

      {props.children[0]}
         {props.children[1]}
       
    </div>
  )
}

export default Hello