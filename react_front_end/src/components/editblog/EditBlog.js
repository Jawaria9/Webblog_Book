import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from '../../context/Context';

export default function EditBlog() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const folder="http://localhost:5000/imgs/";
  const {user}=useContext(Context)
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };



  return (

    <div class="m-3 p-3   align-items-center justify-content-center">
      <div class=" row">
        {post.photo &&
          <img
            className=""

            src={folder+post.photo}
            alt=""
          />
        }
      </div>

      
      {post.username===user?.username && 
      <h4 className='d-flex justify-content-end'>
        <i className="col-1 m-1 p-1 far fa-edit" onClick={() => setUpdateMode(true)}></i>
        <i className="col-1 m-1 p-1  far fa-trash-alt" onClick={handleDelete}></i>
      </h4>
      }
      <div class="  row p-3 m-3">
      {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) :(
        <h4 className='fw-bold'>{post.title}</h4>)}
               {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
        <p>
          {post.desc}
        </p>
        )}
        <br></br>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="">
              <Link to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
        </div>
        <h3 className="fw-bold">{new Date(post.createdAt).toDateString()}</h3>
        {updateMode && (
          <button  className="PostButton clr text-light" onClick={handleUpdate}>
            Save Changes
          </button>
        )}
      </div>




    </div>


  )
}
