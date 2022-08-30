import { useAtom } from 'jotai';
import React from 'react'
import { decrementCountAtom, doubleCountAtom, incrementCountAtom, isCountEvenAtom } from './atoms';

const Count = () => {
    const [count, increment] = useAtom(incrementCountAtom);
    const [, decrement] = useAtom(decrementCountAtom);
    const [doubleCount] = useAtom(doubleCountAtom);
    const [isCountEven] = useAtom(isCountEvenAtom);

    return (
        <div className="d-flex flex-column w-25 ms-auto me-auto">
            <div className='list-group w-100'>
                 <div className='list-group-item'>Actual: {count}</div>
                 <div className='list-group-item'>Double: {doubleCount}</div>
                 <div className='list-group-item'>is even: {isCountEven ? 'true' : 'false'}</div>
            </div>
            <button className='btn btn-success w-100' onClick={increment}>Add</button>
            <button className='btn btn-danger w-100' onClick={decrement}>Substract</button>
        </div>
    )
}

export default Count;