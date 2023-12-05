import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser(){

    const [firstname, setFirstName]= useState();
    const [lastname, setLastName]= useState();
    const [email, setEmail]= useState();

    const navigate=useNavigate();

    

    let handleCreation = (e)=>{
        
        e.preventDefault();
        console.log(firstname);
        axios.post("http://localhost:8089/employee/create",{firstname,lastname,email})
        .then(()=>{
            navigate("/");
        })
        .catch((err)=>console.log(err));

    }


    return(

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">

                <form onSubmit={handleCreation}>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname" onChange={(e)=>{setFirstName(e.target.value)}}></input><br></br><br></br>

                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" id="lastname" onChange={(e)=>{setLastName(e.target.value)}}></input><br></br><br></br>

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br></br><br></br>

                    <input type="submit"></input>

                </form>

            </div>
        </div>
    )
}
export default CreateUser;