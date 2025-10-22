import React from 'react'

const Card = (props) => {

    console.log(props);
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1760434600537-024e2771d580?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" alt=" "/>
        <h1>{props.user}</h1>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, minima.</h2>
        <button>View Profile</button>
         
    
    </div>
  )
}

export default Card

