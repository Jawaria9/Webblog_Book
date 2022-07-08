import './Write.css'
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../../context/Context';


export default function Write() {


  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
      
    <div class='write '>
      {file && 
        <img
        className="writeImg "
        src={URL.createObjectURL(file)}
        alt=""
      />
}
        <div class="container ">

  <div class="row">
    <div class="col-md-12">
      <form onSubmit={handleSubmit}>
        <div class="form-group p-2 clr">
          <input type="text" class="form-control " name="title" placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div class="form-group p-2 clr">
          <label> Image </label>
          <div class="input-group ">
            
            <span class="input-group-btn ">
              <span class="btn  btn-file btn-secondary ">
                Browse <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
              </span>
             </span>
            <input type="text" class="form-control" readonly/>
           </div>
        </div>
        <div class="form-group p-2 clr">
          <textarea class="form-control bcontent size" name="content" placeholder='Write a story...' 
          onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <div class="form-group p-2 clr">
           <input type="submit" name="Submit" value="Publish" class="btn btn-secondary form-control " />
        </div>
      </form>
    </div>
  </div>
</div>
      
    </div>
  )
}
