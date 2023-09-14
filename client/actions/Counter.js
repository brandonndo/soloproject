import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount
} from './counterSlice'

export function Counter(){
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return(
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label='increment value'
                    onClick = {() => dispatch(increment())}
                    >
                        +
                </button>
                <span className={styles.values}>{count}</span>
                <button
                    className={styles.button}
                    aria-label='decrement value'
                    onClick = {() => dispatch(decrement())}
                    >
                        -
                </button>
            </div>
            
        </div>
    )

}