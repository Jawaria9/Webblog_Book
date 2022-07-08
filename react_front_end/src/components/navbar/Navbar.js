import React, { Fragment } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useContext } from 'react';


export default function Navbar() {

  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };


  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark  clr">
        <div className="container-fluid">

          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-lg-flex" id="navbarNav">
            <ul class="navbar-nav  ml-auto mt-3 mt-lg-0 row-3">
              <li class="nav-item"> <a class="nav-link" href="#">
                <i class="fab fa-twitter"></i><span class="d-lg-none ml-3">Twitter</span>
              </a> </li>
              <li class="nav-item"> <a class="nav-link" href="#">
                <i class="fab fa-facebook"></i><span class="d-lg-none ml-3">Facebook</span>
              </a> </li>
              <li class="nav-item"> <a class="nav-link" href="#">
                <i class="fab fa-instagram"></i><span class="d-lg-none ml-3">Instagram</span>
              </a> </li>
              <li class="nav-item"> <a class="nav-link" href="#">
                <i class="fab fa-linkedin"></i><span class="d-lg-none ml-3">Linkedin</span>
              </a> </li>
            </ul>



            <ul className="navbar-nav ms-md-auto gap-2 row-6 ">
              <li className="nav-item rounded ">
                <Link to='/' className="nav-link active" aria-current="page" href="#"><i className="bi bi-house-fill me-2"></i>Home</Link>
              </li>
              <li className="nav-item rounded">
                <Link to="/about" className="nav-link" href="#"><i className="bi bi-people-fill me-2"></i>About</Link>
              </li>

              <li className="nav-item rounded">
                <Link to="/write" className="nav-link" href="#"><i className="bi bi-pencil-square me-2"></i>Write</Link>
              </li>


              {user &&
              <li className="nav-item rounded">
                <Link onClick={handleLogout} className="nav-link" href="#"> <p className="bi bi-box-arrow-right me-2">LogOut</p>
                </Link>
              </li>
}
              {!user &&
          
                  <li className="nav-item rounded">
                  <Link to="/login" className="nav-link" href="#"><i className="fa fa-sign-in me-2"></i>Login</Link>
                </li>
}
{!user &&
                 <li className="nav-item rounded">
                 <Link to="/signup" className="nav-link" href="#"><i className="icon-chevron-sign-up me-2"></i>Sign Up</Link>
               </li>
             
}

            </ul>
            <div >
              <Link>
              {
                user && 
                  <img
                  className="topImg m-4"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt=""
                />
                
           

              }
                
              </Link>
              <i className="topSearchIcon fas fa-search"></i>
            </div>
          </div>
        </div>
      </nav>



    </Fragment>
  )
}
