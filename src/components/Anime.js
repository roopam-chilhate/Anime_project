import React, { useState, useEffect } from "react";
import AnimeItem from "./AnimeItem";
import FullDetails from './FullDetails'

const Anime = (props) => {
  const { itemValue,searchvalue,searched }=props
  const [value, setValue] = useState([]);
  const[data,setData]=useState([]);

  const animeDetails = async () => {
    const url = "https://ghibliapi.herokuapp.com/films";
    const data = await fetch(url);
    let parsedData = await data.json();
    setValue(parsedData);
   
  };
  useEffect(() => {
    animeDetails();
  });
  const GetDetails=async (id)=>{
    const url=`https://ghibliapi.herokuapp.com/films/${id}`
    const response= await fetch(url);
    const parsedData=await response.json()
    console.log(parsedData)
    setData(parsedData)

  }
  const goback=(item)=>{
    if(item==="back")
    setData([])
  }
  const items = value.filter((data)=>{
    if(searchvalue == null)
        return data
    else if(data.title.toLowerCase().includes(searchvalue.toLowerCase())) {
        return data
    }
  })
  
  
  
  
  return (
    <>{data.length===0&&items.length>0?(
      <div>
        <h1 className="my-5 text-center">Welcome To The Anime World</h1>
        <div className="row">
          
          {items.map((item, id) => {
            return <AnimeItem key={id} item={item}  GetDetails={GetDetails}/>;
          })}
        </div>
      </div>):(
        <div className="row">
        <FullDetails data={data} goback={goback} searched={searched}/>
        </div>
      )}
    </>
  );
};

export default Anime;
