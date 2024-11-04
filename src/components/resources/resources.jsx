import React, { useEffect, useState } from 'react'
import "./resources.css";
import axios from 'axios';


const Resources = () => {
  const[resource,setResource] = useState([]);


  const fetchResources = async () => {
    const response = await axios.get('https://reqres.in/api/unknown');
    const data =  response.data.data;

    // const data = response.data;
    console.log("returned data",data)

    setResource(data);

  }

  useEffect(() => {
    fetchResources();
  }, [])


  return (
    <div>
    {resource &&
      resource.map((rs) => (
        <div key={rs.id}>
          <h1>{rs.name}</h1>
          <p>{rs.pantone_value}</p>
          <h2>{rs.year}</h2>
          <p>{rs.color}</p>

          
        </div>
      ))}
  </div>
  )
}

export default Resources