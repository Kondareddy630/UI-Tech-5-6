import React from 'react'

function Props2(props) {

    console.log(props);


  return (
    <div>Props2

        <dt>Sid</dt>
        <dd>{props.id}</dd>

          <dt>Name</dt>
        <dd>{props.name}</dd>
   
     <dt>Course</dt>
        <dd>{props.course}</dd>

           <dt>Paid</dt>
        <dd>{
        props.ispaid?"Fees paid":"Due"


        
        }</dd>
   

 <dt>Citites</dt>
 <ul>
    {
        props.cities.map((c)=><li>{c}</li>)
    }
 </ul>

    </div>
  )
}

export default Props2