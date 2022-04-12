import React from "react";

const AnimeItem = (props) => {
  const { item ,GetDetails}=props;
  const handleclick = async (id) => {
   
    GetDetails(id)
  };

  return (
    <>
      <div className="col-4 text-center d-flex justify-content-center my-1">
        <div class="card" style={{ width: "18rem" }}>
          <img src={item.image} class="card-img-top" alt="Image" />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.description.slice(0, 100)}</p>
            <button
              class="btn btn-primary"
              
              onClick={() => handleclick(item.id)}
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeItem;
