import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react'

  
export default function Index() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <div>
        <h3>Next JS Counter App</h3>
      </div>

      <button type="button" onClick={ () => setCount(count-1) } >Decrement</button>     
      <span>{count}</span>
      <button type="button" onClick={ () => setCount(count+1) } >Increment</button>     
    </div>
  )
}
