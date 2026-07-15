import axios from "axios";
import { useEffect, useState } from "react";

const PostSearch = () => {
    
    const[postResult, SetPostResult] = useState({})
    const[id,SetId] = useState(0) 

    const handleChange = event => {
        // alert(event.target.value);
        SetId(event.target.value)
        alert(id);
    }

    const show = () => {
        // alert(id);
        axios.get("http://jsonplaceholder.typicode.com/posts/"+id).then(
            (response) => {
                SetPostResult(response.data)
            }  
          )
      
    }
    return(
        <div>
            <label>
                User Id : </label>
            <input type="number" name="id" 
                value={id} onChange={handleChange} /> <br/>
            <input type="button" value="Show" onClick={show} />
            <hr/>
            User Id : <b>{postResult.id}</b> <br/>
            Name : <b>{postResult.title}</b> <br/>
            User Name : <b>{postResult.userId}</b> <br/>
           
        </div>
    )
}

export default PostSearch;