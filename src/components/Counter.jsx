import React, { useState } from 'react'

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const handleCount = () => setCount(count + 1);
    return (
        <div>
            {props.render(count, handleCount)}
        </div>
    )
}

export default Counter
