import React, { useState } from 'react';

const CounterButton = () => {
    const [isRed, setIsRed] = useState(true);
    const [label, setLabel] = useState(1);

    const handleClick = () => {
        setIsRed(!isRed);
        setLabel(isRed ? 2 : 1);
    };

    return (
        <button
            onClick={handleClick}
            style={{ backgroundColor: isRed ? 'red' : 'blue' }}
        >
            {label}
        </button>
    );
};

export default CounterButton;