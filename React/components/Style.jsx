import React, { useState } from 'react'

function Style() {

const[state,setState]=useState({color:"blue",backgroundColor:"lightblue",textAlign:"justify",padding:"20px",fontSize:"18px",borderLeft:"10px solid red"});



  return (
    <div>


<h1 className='java'>Java Full Stack</h1>
<h1 className='ui'>Java Full Stack</h1>

<h1 style={{color:"red",textAlign:"center",textTransform:"capitalize",backgroundColor:"pink",padding:"10px",boxShadow:"4px 4px 4px black"}}>java full stack</h1>

<p style={state}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem doloribus magnam tempore mollitia alias totam similique, consequuntur sed porro incidunt esse repudiandae labore cupiditate fugit libero dolores hic eaque a temporibus ex iste maxime quis dolor? Delectus ducimus error libero veniam ipsum, saepe provident, recusandae totam, ipsam commodi minima.</p>

    </div>
  )
}

export default Style