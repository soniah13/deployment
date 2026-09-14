import React, { useMemo } from 'react'

function ExpensiveComponent({num}) {
    const calculate = useMemo(() => {
        console.log("Calculating...")
        let total = 0;
        for (let i = 0; i < 10000000; i++){
            total += num;
        }
        return total;    
    }, [num]);
  return (
    <div>
    <p>Result: {calculate}</p>
    </div>
  )
}

export default ExpensiveComponent