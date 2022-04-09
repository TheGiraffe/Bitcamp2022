import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Cause = (props) => (
 <tr>
   <td>{props.cause.name}</td>
   <td>{props.cause.description}</td>
   <td>{props.cause.needs}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.cause._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteCause(props.cause._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function CauseList() {
 const [causes, setCauses] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getCauses() {
     const response = await fetch(`/cause/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const causes = await response.json();
     setCauses(causes);
   }
 
   getCauses();
 
   return;
 }, [causes.length]);
 
 // This method will delete a cause
 async function deleteCause(id) {
   await fetch(`/${id}`, {
     method: "DELETE"
   });
 
   const newCauses = causes.filter((el) => el._id !== id);
   setCauses(newCauses);
 }
 
 // This method will map out the records on the table
 function causeList() {
   return causes.map((cause) => {
     return (
       <Cause
         cause={cause}
         deleteCause={() => deleteCause(cause._id)}
         key={cause._id}
       />
     );
   });
 }
 
 // This following section will display the table with the cause details
 return (
   <div>
     <h3>Cause List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Cause Name</th>
           <th>Description</th>
           <th>Needs</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{causeList()}</tbody>
     </table>
   </div>
 );
}