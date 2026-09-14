import React, { memo } from 'react'

const ChildCounter = memo(({value}) =>{
    console.log("Child component has been rendered!!")

    return <p>value: {value}</p>
})

export default ChildCounter