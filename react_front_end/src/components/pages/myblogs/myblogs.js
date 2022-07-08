import {useContext, useEffect, useState } from "react";
import Post from "../../post/Post";
import { useLocation } from 'react-router-dom'
import { Context } from "../../../context/Context";
import axios from "axios";
import MainPosts from "../../mainposts/MainPosts";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import './MainPosts.css';
export default function Myblog() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [posts, setPosts] = useState([]);
  const {user}=useContext(Context)
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  const {search}=useLocation();
  
  const username = user._username; 
  //useEffect(() => {
   // const fetchPosts = async () => {
     // const res = await axios.get(`posts/${username}`);
     // setPosts(res.data);
   // };
  
  //});



  return (
    <div className="posts">     
    
      <div className='d-md-flex '>
          <div className='col-md-9'>   
      
      {posts.map((p)=>(
       <Post post={p} />
       ) )}

        </div>
          <div className='col-md-3 '><Sidebar></Sidebar></div>
      </div>
    </div>
  );
}
