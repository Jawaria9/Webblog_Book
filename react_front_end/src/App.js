import Navbar from './components/navbar/Navbar';
import {Fragment, useContext} from 'react'
import Home from './components/pages/homepage/Home';
import Sidebar from './components/sidebar/Sidebar';
import MainPosts from './components/mainposts/MainPosts';
import PreviewBlog from './components/pages/previewblog/PreviewBlog';
import Write from './components/pages/write/Write';
import Login from './components/pages/login/Login';

import Signup from './components/pages/signup/Signup';
import {Route,Switch} from 'react-router-dom'
import EditBlog from './components/editblog/EditBlog';
import About from './components/pages/about/About';
import { Context } from './context/Context';
import Myblog from './components/pages/myblogs/myblogs';



function App() {

const {user}=useContext(Context)



  return ( 
    <Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route  path='/signup'>
        {user ? <Home></Home> :<Signup></Signup>}
        </Route>
        <Route path='/login'>
        {user ? <Home></Home> :<Login></Login>}
        </Route>
        <Route path='/write'>
        {user ?<Write></Write>:<Signup></Signup> }
        </Route>
        <Route path='/previewblog/:Id'>
        <PreviewBlog></PreviewBlog>
        </Route>
        <Route path='/myblog/:username'>
        <Myblog/>
        </Route>

        <Route path='/about'>
        <About></About>
        </Route>
       </Switch>
    </Fragment>
  );
}

export default App;
