import React from 'react';
import  { FaTrash, FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function List() {
  const users = [
    {
      id: '01',
      name: 'John Deo',
      email: 'john@gmail.com',
      phone: '202-555-0163'
    },
    {
      id: '02',
      name: 'Brad Pitt',
      email: 'fightclud@gmail.com',
      phone: '202-555-0106'
    },
    {
        id: '03',
        name: 'Jialei Sun',
        email: 'jialei.sun@gmail.com',
        phone: '202-533-0106'
      },
      {
        id: '04',
        name: 'Paul Gorlicki',
        email: 'paul.gorlicki@gmail.com',
        phone: '202-111-0106'
      },
  ];
  
  return (
    <div>
        <center>
        <h3> Liste des contacts </h3>
        </center>
        <table style={{ marginLeft: '100px', marginRight: '100px', width:"80%" }}>
  <tr>
  <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Delete</th>
    <th>Modify</th>
  </tr>
        {users.map((data) => (
        <tr key={data.id}> 
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.phone}</td>
    <td>
    <Link to="/DeleteContact">
        <FaTrash size={25} style={{ marginTop: '5px' }} color="white"/>
    </Link>
    </td>
    <td>
    <Link to="/ModifyContact">
        <FaPencilAlt size={25} style={{ marginTop: '5px' }} color="white"/>
    </Link>
    </td>
   </tr>
   ))}
</table>
</div>
  );
}
export default List;