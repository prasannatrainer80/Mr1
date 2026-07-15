import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';

const PostShow = () => {
   const [posts,setPostData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://jsonplaceholder.typicode.com/posts");
            setPostData(response.data)
        };
        fetchData()
    },[])

    return(
        <table border="3" align="center">
          <tr>
            <th>ID</th>
            <th>User Id</th>
            <th>Title</th>
          </tr>
          {posts.map((item) => 
            <tr>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
            </tr>
          )}
        </table>
      )
}

export default PostShow;