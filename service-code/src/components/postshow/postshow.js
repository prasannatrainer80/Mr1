import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';
import Menu from '../menu/menu';

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
      <div>
        <Menu />
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
        </div>
      )
}

export default PostShow;