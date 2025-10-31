import React from 'react'
import Card from "./components/Card"
const App = () => {
  return (
   <div className='parent'>

     <Card user='Preeti' age={25} img = 'https://images.unsplash.com/photo-1665042099439-39d93c1117e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1156'/>
    <Card user='Sourabh' age={25} img='https://images.unsplash.com/photo-1657815555962-297100ce4b0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'/>
    <Card user='Swati' age={24} img='https://images.unsplash.com/photo-1657815555962-297100ce4b0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'/>
    </div>
  )
}

export default App
