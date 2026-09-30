import React, { useEffect, useState } from 'react'

function Featch() {


const[state,setState]=useState([]);


useEffect(()=>{


fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((products)=>setState(products))
.catch((error)=>console.log(error))
    

},[])




  return (
    <div>

<h2 className='text-muted'>List of Products</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias veritatis facilis odit labore corrupti, voluptates, tempore dolor distinctio exercitationem a. Culpa temporibus molestias quod velit excepturi qui quos eius odio, sint sit sequi doloremque nobis, nisi voluptas labore quasi cupiditate modi a recusandae earum? Nihil non facilis ipsa ipsum.</p>

<div className='row'>

    {
        state.map((p)=>
            <div className='col-lg-3'>

                <div className='card shadow mt-2 p-2'>
                    <img src={p.image} height={200}/>
                    <div className='card-header'>
                        <h6>{p.title.slice(0,50)}</h6>
                    </div>

                    <div className='card-body'>
                        <dt>Category</dt>
                        <dd className='text-capitalize'>{p.category}</dd>

                        <dt>Price</dt>
                        <dd>&#8377;{p.price}</dd>

                        <dt>Rating</dt>
                        <dd className='badge bg-success'>{p.rating.rate}</dd>

                        <div className='mt-4'>
                            <button className='btn btn-danger'>Add To Cart</button>
                        </div>

                    </div>
                </div>



            </div>
        )
    }

</div>

      
    </div>
  )
}

export default Featch