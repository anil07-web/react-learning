import React, { Fragment, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Table } from "react-bootstrap";
function List(){


    // const [user,setUser] = useState([
    //     {name:"Anil",age:26,},
    //     {name:"Vinay",age:24}
    // ])
    const [user,setUser] = useState([])
   useEffect(()=>{
     fetch("https://dummy.restapiexample.com/api/v1/employees").then(data=>{
       data.json().then((response)=>{
         console.log("Response :",response.data)
         setUser(response.data)
       })
     })
   }

   )


    return(
        <Fragment>
            {/* <h2>This is Listing Component</h2>
            {
              user.length==3?<div>Yes</div>:<div>No</div>            
            }
            <h2>This is listing com</h2>
            <h2>This is listing com</h2>
            <h2>This is listing com</h2>
            <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button> */}

  
  
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.No</th>
      <th>First Name</th>
      <th>Salary</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody> {
      user.map((item)=>
    <tr>
      <td>{item.id}</td>
      <td>{item.employee_name}</td>
      <td>{item.employee_salary}</td>
      <td>{item.employee_age}</td>
    </tr>)
}
    
  </tbody>
</Table>
</Fragment>


    )
}

export default List;