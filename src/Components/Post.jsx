import axios from "axios";
import React, { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState([]);
  const [err, setError] = useState(null);
  const getData = async () => {
    try {
      let tempArray=[];
      const response = await axios.get("https://contourangular-default-rtdb.firebaseio.com/student.json");
      if (response.data) {
        for (let key in response.data) {
          tempArray.push({
            ...response.data[key],
            id: key,
          });
        
        }
        setPosts(tempArray);
      }
    } catch (abc) {
      setError(abc.message);
      
    }
  };

  // const post=async()=>{
  //    const data=await axios.post("https://contourangular-default-rtdb.firebaseio.com/post.json",{name:"kamran",lastname:"kamo"});
  //    console.log(data);
  // }
  useEffect(()=>{
      getData();
  },[])
   
  
  return <div className="container">
          <div className="row">
            <div className="col-xl-12">
                {
                    err?
                    <div className="alert bg-danger">
                        {err}
                    </div>
                    :null
                }

               {
                posts.map((list)=>{
                  return(
                    <>
                      <li>
                        {list.firstName}
                      </li>
                      <li>
                        {list.Phone}
                      </li>
                    </>
                  )
                })
               }
            </div>
          </div>
  </div>;
}

export default Post;
