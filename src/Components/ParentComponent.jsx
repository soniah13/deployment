import React, { useState } from 'react'
import ExpensiveComponent from './ExpensiveComponent'

function ParentComponent() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(5)
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count +1)}> Increment</button>
        <ExpensiveComponent num={num} />
    </div>
  )
}

export default ParentComponent