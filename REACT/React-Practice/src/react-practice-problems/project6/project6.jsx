import { useState } from 'react';

function Project6() {
    const [color, setColor] = useState('red');

    return (
        <div className="container">
            <h1 className='title'>Color Changer</h1>
            <div className="box" style={{ backgroundColor: color }}>
                <button className='btn' onClick={() => setColor('green')}>Change to Green</button>
                <button className='btn' onClick={() => setColor('red')}>Change to Red</button>
            </div>
        </div>
    );
}