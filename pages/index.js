import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Form(){
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleSubmit = async (event)=>{
      event.preventDefault();
      const res = await fetch( "/api/store", {
            body: JSON.stringify({
              first : firstName,
              last : lastName,
            }),     
            headers: {
            "Content-Type": "application/json"  
            },
            method: "POST",
        }
    ).catch(error => {
      console.log(error)
    });

    const result = await res.json();
    alert(JSON.stringify(result.message));
    router.push("/components/fetch");
  };

   return (
    <>
    <div>
    <form id ="form" onSubmit = {handleSubmit}>
     <label htmlFor ="firstName">Enter your firstName</label>
      <input type = "text" id = "first" name ="firstName" onChange={e=>{
        console.log("target's value"+e.target.value);
        setFirstName(e.target.value)
        }}/>
      <br></br>
      <label htmlFor = "lastName">Enter your lastName</label>
      <input type = "text" id = "last" name ="lastName"onChange={e=>{setLastName(e.target.value)}} /> 
      <br></br>
      <button>submit</button>
     </form>
     </div>
    </>
   )
}
