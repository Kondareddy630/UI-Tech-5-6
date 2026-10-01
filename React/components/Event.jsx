import React from 'react'

function Event() {


    function handleMessage(event)
    {
        
        console.log(event.target);
        console.log(event.target.className);
        console.log(event.target.name);
        console.log(event.target.id);


        console.log(event.clientX);
         console.log(event.clientY);
          console.log(event.altKey);
            console.log(event.shiftKey);
              console.log(event.ctrlKey);
                console.log(event.preventDefault());
                  console.log(event.stopPropagation());


        
        
        
        
    }

    function addemp(myemp)
    {

        console.log(myemp);
    }

    function sendall(num,e){

        console.log(num);
        console.log(e.target);
         console.log(e.target.className);
          console.log(e.target.id);
           console.log(e.target.name);

            console.log(e.clientX);
             console.log(e.clientY);
    }

  return (
    <div>

 
 <button className='btn btn-danger' name="hello" id="btn1" onClick={handleMessage}>Click</button>

<button className='btn btn-primary' onClick={()=>{addemp({empno:101,name:"raju"})}}>Add Employee</button>


<button className='btn btn-success' id="hello" name="hyd" onClick={(hello)=>{sendall([10,20,30],hello),hello}}>Click All</button>
    </div>
  )
}

export default Event