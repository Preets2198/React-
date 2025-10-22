import React from 'react'
import Card from "./components/Card"
const App = () => {
  return (
   <div className='parent'>

     <Card user='Preeti' age={25}/>
    <Card user='Sourabh' age={25}/>
    </div>
  )
}

export default App
