import React from 'react'
import EditBlog from '../../editblog/EditBlog'
import Sidebar from '../../sidebar/Sidebar'

export default function PreviewBlog() {
  return (
    <div className='d-md-flex '>
        <div className="col-md-9"><EditBlog></EditBlog></div>
        <div className='col-md-3'><Sidebar></Sidebar></div>
    </div>
  )
}
