import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    const [data, setData]=useState('');
   
    const handleChange = (e) => {
        setData(e.target.value)
    }
const handleClick=async (data)=>{
  
   
   props.Search(data);
   setData('')

   

}
    return (<>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <Link className="navbar-brand" to="/anime">Anime</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/anime">Home</Link>
                  </li>
                  
              </ul>
              <form onSubmit={(e)=>e.preventDefault()} className="d-flex">
                  <input className="form-control" value={data} type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>
              <button className="btn btn-primary mx-2" onClick={()=>handleClick(data)} >Search</button>
              </form>
          </div>
      </div>
  </nav>

</>)
}
export default Navbar
   
