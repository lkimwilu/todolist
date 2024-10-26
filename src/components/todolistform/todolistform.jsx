import React from 'react'
import "./todolistform.css"

const Todolistform = () => {
  return (
    <form>
    <div>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
      
      />
    </div>

    <div>
      <label htmlFor="completed">Completed:</label>
      <input
        type="checkbox"
        id="completed"
     />
    </div>

    <button type="submit">Submit</button>
  </form>  
  )
}

export default Todolistform