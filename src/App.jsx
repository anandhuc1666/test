import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[state,setState]=useState([])
useEffect(()=>{
  fetch('http://localhost:3003/user')
      .then(response => response.json())
      .then(result=>{
        setState(result)
      })

},[])
  return(
       <div>
        <ul>
          {
            
          state.map((ress)=>(
              <div>
                 <li>userID:{ress.id}</li>
               <li>user name:{ress.name}</li>
               <li>user midile name{ress.midile-name}</li>
               <li>title{ress.title}</li>
               <li>rivew{ress.body}</li>
              </div>
            )
            )
          }
        </ul>
       </div>
      )
}

export default App
