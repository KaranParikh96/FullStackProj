import { useEffect,useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateUser(){

    const {id}=useParams();
    const [firstname, setFirstName]=useState("");
    const [lastname, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8089/employee/find/"+id)
        .then((result)=>{
            console.log(result.data);
            setFirstName(result.data.firstname);
            setLastName(result.data.lastname);
            setEmail(result.data.email);
            
        })
        .catch((err)=>console.log(err));
    },[])

    let handleUpdate=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8089/employee/update",{id,firstname,lastname,email})
        .then(()=>{
            navigate("/");

        })
        .catch((err)=>console.log(err));
    }


    return (

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    
                    <label htmlFor="firstName">First Name:</label><br></br>
                    <input type="text" id="firstName" value={firstname} onChange={(e)=>setFirstName(e.target.value)}></input><br></br><br></br>
                    
                    <label htmlFor="lastName">LastName:</label><br></br>
                    <input type="text" id="lastName" value={lastname} onChange={(e)=>setLastName(e.target.value)}></input><br></br><br></br>
                    
                    <label htmlFor="email">Email:</label><br></br>
                    <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
                   

                    <input type="submit" className="btn btn-success"></input>

                </form>
            </div>
        </div>
    )

}
export default UpdateUser;