import React, { useState } from 'react'
import ChildCounter from './ChildCounter'

function Counter() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(10)
  return (
    <>
    <h2>Count is: {count}</h2>
    <button onClick={() => setCount(count + 1)}> Increment button</button>
    <button onClick={() => setValue(value +1)}>Change value</button>
    <ChildCounter value={value}/>
    </>
  )
}

export default Counter