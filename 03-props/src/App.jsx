import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      {/* <div className="card">
        <img src="https://images.unsplash.com/photo-1752038944327-3970c77bd891?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" alt="" />
        <h1>Aman Singh</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>  */}


      <Card   user= 'Aman' age={18} img="https://images.unsplash.com/photo-1752038944327-3970c77bd891?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500"/>

      
      <Card   user= 'sarthak' age={21} img='https://www.shutterstock.com/image-vector/diamond-jewelry-logo-icon-isolated-600nw-2298913447.jpg'/>
    </div>
  )
}

export default App
