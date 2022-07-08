
import "./Post.css";
import {Link} from "react-router-dom"


export default function Post({post}) {
  const folder="http://localhost:5000/imgs/";
  return (
<div class="m-3 p-3 d-md-flex d-sm-grid align-items-center justify-content-center">
    <div class=" col-md-7 row-sm">
      {post.photo &&
    <img
        className="postImg"
        src={folder+post.photo}
        alt=""
      />
    }
    </div>
    <div class=" m-3 p-3 col-md-5 row-sm ">
    
      <h4>{post.title}</h4>
      <p>{post.desc}</p>
      <Link to={`/previewblog/${post._id}`}>
      Continue reading
      </Link>
    <br></br>
    <h3 className="fw-bold">{new Date(post.createdAt).toDateString()}</h3>
    </div>

  </div>
  );
}
