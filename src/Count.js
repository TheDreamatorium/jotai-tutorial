import { useAtom } from 'jotai';
import React from 'react'
import { decrementCountAtom, doubleCountAtom, incrementCountAtom, isCountEvenAtom } from './atoms';

const Count = () => {
    const [count, increment] = useAtom(incrementCountAtom);
    const [, decrement] = useAtom(decrementCountAtom);
    const [doubleCount] = useAtom(doubleCountAtom);
    const [isCountEven] = useAtom(isCountEvenAtom);

    return (
        <div>
            Actual:{count} - Double: {doubleCount} - is even: {isCountEven ? 'true' : 'false'}
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Substract</button>
        </div>
    )
}

export default Count;