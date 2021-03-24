import React, { useState } from 'react'
import { multiply } from './functions'

const MultiplyOperation = () => {
 const [result, setResult] = useState(0)
 const [num1, setNum1] = useState(0)
 const [num2, setNum2] = useState(0)

 const handleFormSubmit = (e) => {
    e.preventDefault();
    setResult(multiply(num1, num2))
    setNum1("")
    setNum2("")
 }

 return (
     <div className="Multiply">
        <h2>Multiply</h2>
        <form onSubmit={handleFormSubmit}>
            <input
                placeholder="Number 1"
                type="text"
                onChange={e => setNum1(e.target.value)}
            />
            <input
                placeholder="Number 2"
                type="text"
                onChange={e => setNum2(e.target.value)}
            />
            <button type="submit">Multiply</button>
        </form>
        <h3>{`The result is= ${result}`}</h3>
     </div>
 )
}

export default MultiplyOperation;