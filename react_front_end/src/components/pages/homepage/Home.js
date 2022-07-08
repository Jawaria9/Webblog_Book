import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import MainPosts from '../../mainposts/MainPosts'
import Sidebar from '../../sidebar/Sidebar'
import axios from'axios'
import { useLocation } from 'react-router-dom'


export default function Home() {
  const [posts,setPosts]=useState([]);
  const {search}=useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search );
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);


  return (
    <div>
      <Header></Header>
      <div className='d-md-flex '>
      <div className='col-md-9'><MainPosts posts={posts}></MainPosts></div>
      <div className='col-md-3 '><Sidebar></Sidebar></div>
      </div>

      
    </div>
  )
}
