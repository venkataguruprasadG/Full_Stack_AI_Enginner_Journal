import { useState } from 'react';

function Project5() {

    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <h1>Count: {count}</h1>
            <button className='btn-plus' onClick={() => setCount(count + 1)}>+</button>
            <button className='btn-minus' onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}