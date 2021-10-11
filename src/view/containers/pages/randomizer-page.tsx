import React from 'react';
import {decrement, increment, selectCount} from 'store/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

const RandomizerPage = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return <div>
        <div>Randomizer</div>
        <hr/>
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <mark>{count}</mark>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    </div>
};

export default RandomizerPage;
