import { useState } from "react";

function Primitive()
{

  // Number

const[state,setState]=useState(5000);
const[price,setPrice]=useState(5000.00);
const[price1,setPrice1]=useState(100.123456);

const[price2,setPrice2]=useState(9600);

const[num1,setNum1]=useState("100.25");
const[num2,setNum2]=useState("200.63");

const[views,setViews]=useState(930000000);

const[age,setAge]=useState(20);


// string

const[message,setMessage]=useState("hello students");
const[message1,setMessage1]=useState('hello students');// string literals
const[message2,setMessage2]=useState(`hello students`);// Template literals

const[message3,setMessage3]=useState(`

    hello
    hai
    students
    how are you?
    
    `);

let name="raju";
let balance=5000;

let message4="Hello" + " " + name + " " + "your account balance=" + balance;
console.log(message4);

let message5=`hello ${name} your account balance =${balance}`;
console.log(message5);


const[email,setEmail]=useState("abcd@123");

const[search,setSearch]=useState("electronics");

console.log(search.includes("ele"));


// boolean
const[stock,setStock]=useState(true);


// undefined

const[salary,setSalary]=useState();
console.log(salary)

//null

const[fees,setFees]=useState(null);







    return(
        <div className="container mt-5">
          
          <h2>
           {
           (fees==null)?"You have pay  fees":fees
           }
          </h2>

            <h1>{(stock)?"Stock is available":"No Stock" }</h1>
            <h1>{(stock)?"True":"False" }</h1>

            <h2>Salary:{(salary===undefined)?"Pls Enter salary":salary}</h2>
               

          

            <h2>{search.includes("mobiles")?"true":"false"}</h2>

            

            <h1>{state}</h1>
            <h1>{price.toFixed(2)}</h1>
            <h1>{price1.toFixed(2)}</h1>
            <h1>{price2.toLocaleString('en-in',{style:"currency",currency:"INR",minimumFractionDigits:0})}</h1>

            <p>{parseInt(num1)+parseInt(num2)}</p>
            <p>{Number(num1)+Number(num2)}</p>

            <p>Views:{views.toLocaleString("en-in",{"notation":"compact"})}</p>
            <p>Views:{views.toLocaleString("en-us",{"notation":"compact"})}</p>

            <p>
               {

               (isNaN(age)?"Age must number":age)
               }

            </p>

            <h2>{message1.toUpperCase()}</h2>
            <h2>{message1.length}</h2>

        <h2>{message.slice(0,5)}</h2>

        <h2>{message}</h2>
           <h2>{
            
            (email.indexOf('@')==-1)?"Invalid email":"Valid email"
            }</h2>

            
          
     

        </div>
    )


}

export default Primitive;