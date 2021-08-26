import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';

import { ThemeContext } from '../../context/theme-context';
//useState, useEffect, useContext,UseRef , useCallBack is with fuction, useMemo is with result


function FunctionalComponent1() {
    const [test, setTest] = useState('');

    const value = useContext(ThemeContext);
    const inputEl = useRef('Arvindh');
    const testFun = useCallback((value) => {
        setTest(value);
    }, [value])

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${test} times`;
    }, [test]);

    return (
        <div>
            <p className="text-primary">You typed {test} </p>

            <input ref={inputEl} type="text" />
            <button onClick={() => testFun(inputEl.current.value)} style={{ background: value.theme }}>
                Click me
            </button>
            <table className="table-primary">
                <thead>
                    <th>Sample of Array</th>
                </thead>
                <tbody>
                    <tr>
                        {[1, 2, 3].map((ar, i) => <li key={i}>{ar}</li>)}
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default React.memo(FunctionalComponent1)