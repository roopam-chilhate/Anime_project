import React from 'react'
import { useNavigate } from 'react-router-dom'


const FullDetails = (props) => {
    const {data,goback,searched}=props
    const navigate=useNavigate()
    const handleClick=()=>{
        goback("back")
        searched("searched")
    }
  return (
    <div className=" text-center d-flex  justify-content-center   my-5">
    <div class="card" style={{ width: "30rem" }}>
      <img src={data.image} class="card-img-top" alt="Image" />
      <div class="card-body">
        <h5 class="card-title">{data.title}</h5>
        <p class="card-text">{data.description}</p>
        <div class="card mb-3" style={{ width: "30rem" }}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={data.movie_banner} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{data.original_title}</h5>
        <p class="card-text"><b>Producer:- </b>{data.producer}</p>
        
        <p class="card-text"><small class="text-muted">Release Date:- {data.release_date}</small></p>
      </div>
    </div>
  </div>
</div>
        
        <button
          class="btn btn-primary"
          
          onClick={handleClick}
        >
          Go back
        </button>
        </div>
        </div>
      </div>
  )
}

export default FullDetails