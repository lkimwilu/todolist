import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Resource() {

    const [resource, setResource] = useState([])
  

  
    const fetchResources = async () => {
        const response = await axios.get('https://reqres.in/api/unknown');
        const data = response.data.data
        console.log(data,"data")
        
    
        setResource(data);
    
    };
    

    useEffect(() => {
        fetchResources();
      }, []);
    
    


    return(

    <div>

        {resource && resource.map((re) => (
            <div key={re.id}>
                <h2 className={re.color}>{re.name}</h2>
                <p>{re.pantone_value}</p>
                <small>{re.year}</small>

            </div>
        )

        

        )}

    </div>

  )
}

export default Resource