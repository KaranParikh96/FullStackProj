import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Users(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8089/")
        .then((result)=>setUsers(result.data))
        .catch((err)=>console.log(err))
    },[]);

    let handleDelete= (id)=>{

        axios.get("http://localhost:8089/employee/delete/"+id)
        .then(window.location.reload())
        .catch((err)=>console.log(err));

    }


    
    return (
        
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"> 
                <div className="w-50 bg-white rounded p-3">
                    <Link to={`/createuser`} className="btn btn-success">Add +</Link>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Name</th>
                            </tr>
                    
                        </thead>

                        <tbody>
                        {console.log(users)}

                        {
                            
                            users.map((emp)=>{

                                    return (
                                        
                                            <tr>

                                                <td>{emp.id}</td>
                                                <td>{emp.firstname}</td>
                                                <td>{emp.lastname}</td>
                                                <td>{emp.email}</td>
                                                <td>
                                                    <Link to={`/updateuser/${emp.id}`} className="btn btn-warning">Update </Link>
                                                    <button className="btn btn-danger" onClick={(e)=>{handleDelete(emp.id)}}>Delete</button>
                                                </td>
                                                


                                            </tr>


                                       


                                    )
                                }
                            )

                        }
                    </tbody>
                    </table>

                </div>
            </div>
        
    )
}
export default Users;