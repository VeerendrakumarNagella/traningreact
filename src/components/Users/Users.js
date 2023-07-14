import React from "react"
import './Users.css'
import {useState,useEffect} from "react"



const Users = () => {
    const [users,setUsers]=useState([]);
    

    const getData=async()=>{
        const data=await fetch("https://reqres.in/api/users");
        const json=await data.json();
        setUsers(json.data);
        console.log(users);
    }
    useEffect(()=>{
        getData()

    },[])

  return (
    <div>
    <h2>Users Data</h2>
      <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Avatar</th>
            </tr>
        </thead>
        <tbody>
            {users && users.map(user=>
                <tr key={user.id}>
                <td>{user.id}</td> 
                <td>{user.first_name}{user.last_name}</td>
                <td>{user.email}</td>
                <td><img src={user.avatar}/></td>
                </tr>
                )}
        </tbody>

      </table>
    </div>
  )
}

export default Users

