import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Dummy() {


const[state,setState]=useState([]);


async function loadProducts(){

    try{
    let products=await axios.get("https://dummyjson.com/products");
    setState(products.data.products);
    }
   
    catch(error)
    {
        console.log(error);
    }


}

useEffect(()=>{

    loadProducts();

},[])



  return (
    <div>
        <h2 className='text-muted'>Dummy Json Products</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores exercitationem possimus nam, perferendis sint, illum a quidem repellendus non dolorum illo aspernatur facilis vero magni ipsum fugit laboriosam? Recusandae quam perspiciatis non, incidunt itaque doloribus voluptates consequuntur nesciunt esse iusto et omnis vel deserunt quas dignissimos officiis. Modi, sequi quae!</p>

      
            {
                state.map((p)=>
                    <div className='row border p-1 rounded mt-2 shadow-lg align-items-center' key={p.id}>

                        <div className='col-lg-3'>
                            <img src={p.thumbnail} className='img-fluid'/>
                        </div>

                         <div className='col-lg-6'>
                            <h4>{p.title}</h4>
                            <span className='badge bg-success'>{p.rating}</span>
                            <p className='my-2'>{p.description}</p>

                        </div>

                         <div className='col-lg-3'>
                            <b className='fs-1'>&#8377;{p.price}</b>
                        </div>

                    </div>
                )
            }
        
    </div>
  )
}

export default Dummy