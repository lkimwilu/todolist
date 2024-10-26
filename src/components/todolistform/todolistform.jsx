import React from 'react'
import "./todolistform.css"

const Todolistform = () => {
  return (
    <form action="">
        <label htmlFor="Title">Title</label>
        <input type="text" />
        <label htmlFor="Completed">Completed</label>
        <input type="text" />
        <button type='submit'>Submit</button>
    </form>   
  )
}

export default Todolistform