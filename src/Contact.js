import { useEffect, useState } from "react";

function Contact(){

    const[name,setName]=useState("Anil");
    const[age,setAge]=useState(25);

    useEffect(()=>{
        console.log("Hooks")
    },[age])
    return(
        <div>
            <h2>This is Functional component</h2>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <button onClick={()=>setName("A K")}>Update Name</button>
            <button onClick={()=>setAge(30)}>Update Age</button>
        </div>
    )
}

export default Contact;