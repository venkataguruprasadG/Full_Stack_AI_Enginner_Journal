import { useState } from 'react';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

function Project13() {
    const [sharedText, setSharedText] = useState("");

    return (
        <div>
            <h1>Project 13: Lifting State Up</h1>
            {/* Pass the setter function to the input child */}
            <InputComponent onTextChange={setSharedText} />

            {/* Pass the value to the display child */}
            <DisplayComponent value={sharedText} />
        </div>
    );
}
export default Project13;