import axios from 'axios';
import React, { useState } from 'react'

function Add() {
    const [firstName,setFirstName]=useState('');
    const [LastName,setLast]=useState('');
    const [Phone,setPhone]=useState('');
    const [Reg,setReg]=useState('');
     
    const AddData=async(e)=>{
        e.preventDefault();
       try {
        const res=await axios.post("https://contourangular-default-rtdb.firebaseio.com/student.json",{firstName,LastName,Phone,Reg});
        if(res.data){
            alert("data added successfully")
        }
       } catch (error) {
          console.log(error);
       }
    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-xl-12">
                 <div className="card shadow p-5">
                      <form onSubmit={AddData} >  
                            <div className="mb-2">
                              
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)} />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="form-control" onChange={(e)=>setLast(e.target.value)} />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="">Phone</label>
                            <input type="text" className="form-control"  onChange={(e)=>setPhone(e.target.value)}/>
                            </div>

                            <div className="mb-4">
                            <label htmlFor="">Reg</label>
                            <input type="text" className="form-control" onChange={(e)=>setReg(e.target.value)} />
                            </div>
                            <button type='submit'>
                                add
                            </button>
                       </form>
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add
