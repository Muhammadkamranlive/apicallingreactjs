import axios from "axios";
import React, { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState([]);
  const [err, setError] = useState(null);
  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/poss");
      if (response == 200) {
        setPosts(response.data);
      }
      
    } catch (abc) {
      setError(abc.message);
    
    }
  };

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
            </div>
          </div>
  </div>;
}

export default Post;
