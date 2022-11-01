import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const simplevariableName = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("calling be dependency");
    if (simplevariableName.status == 200) {
        
      setUsers(simplevariableName.data);
    }
  };
  // const getCallBack=()=>{
  //      const data=axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
  //         console.log(res);
  //      }).catch((err)=>{
  //         console.log(err)
  //      })
  // }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
                 <div className="table   ">
                    <thead>
                        <tr>
                            <td>
                               ID 
                            </td>
                            <td>
                                Name
                            </td>
                            <td>
                                Username
                            </td>
                            <td>
                                Email
                            </td>
                            <td>
                                Address
                            </td>
                            <td>
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((list)=>{
                               return(
                                <>
                                   <tr>
                                    <td>
                                       {list.id}
                                    </td>
                                    <td>
                                       {list.name}
                                    </td>
                                    <td>
                                        {list.username}
                                    </td>
                                    <td>
                                      {list.email}
                                    </td>
                                    <td>
                                     {list.address.street +" , "+ list.address.city }
                                     
                                    </td>
                                    <td>
                                        <button className="btn btn-primary shadow-lg ">
                                          Delete
                                        </button>
                                    </td>
                           </tr>
                                </>
                               ) 
                            })
                        }
                        
                    </tbody>
                 </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
