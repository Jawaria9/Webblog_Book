import Post from "../post/Post";
import { useEffect, useState } from "react";
import './MainPosts.css';

export default function MainPosts() {

  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [posts, setPosts] = useState([]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    fetch(`http://localhost:5000/new/posts?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalpage, posts }) => {
        setPosts(posts);
        setNumberOfPages(totalpage);
      });
  }, [pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };


  return (

    <div className="posts">
    <h3 class = "pagination">Page of {pageNumber + 1}</h3>
     
    {posts.map((p)=>(
       <Post post={p} />
       ) )} 
      
      <div class="pagination">
       <button  onClick={gotoPrevious}>Previous</button>
      {pages.map((pageIndex) => (
        <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
          {pageIndex + 1}
        </button>
      ))}
      <button onClick={gotoNext}>Next</button>
      </div>
     
    </div>
  );
}
