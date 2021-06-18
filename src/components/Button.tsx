import React, { useState } from 'react'

export function Button() {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);

    return (
        <button onClick={increment}>{counter}</button>
    );
}