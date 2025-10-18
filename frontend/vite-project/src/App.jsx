import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [responses, setResponses] = useState(<p>hi</p>);

  return (
    <main>

      
      <form>
        <div className='name-container'>
          <label htmlFor='name'>Name</label>
          <input type='text' name="name" id="name"/>
        </div>

        <div className='descriptors-container'>
          descriptors
          
        </div>

        <div>
          {responses}
        </div>


      </form>
    </main>
  )
}

export default App
