// rafce
import React from 'react'
import Card from './components/Card'

const App = () => {

  const user = 'Sarthak'
  return (
    <div>
{/*       
      <div className='card'>
        <h1>Nitish Kumar Behera</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quod.</p>
      </div> 
      {Card()}   */}


      <h3>I am {user}</h3>

      <Card />
    </div>
  )
}

export default App

