import { useState, useEffect } from 'react';

const FunctionalUpdateSetState = () => {
    const [ count, setCount ] = useState(0);

    useEffect( () => {
        const id = setInterval( () => {
            setCount( c => c + 1 );
        }, 1000);

        // cleanup; somewhat similar in implementation to componentWillUnmount
        return () => clearInterval(id);
    },[]);


    return(
        <div className='p-4 rounded bg-blue-100 h-min w-3/5'>
            <h3 className='text-2xl capitalize font-bold text-center mb-2'>functional update form of setState</h3>
            <p className='text-xl'>Current counter: {count}</p>

            <div><b>NOTE:</b> <br/>
                When we are updating state inside of useEffect sometimes there may arise
                situations where we do not necessarily need to run the effect on every re-render.
                This would be applicable when using setInterval where we only call setInterval once
                during mount and then it will run itself.
                But if we approach the method to update state as : <p className='py-4 bg-white font-semibold'>setState(count + 1).</p> Then we need
                to pass 'count' as depedency array to useEffect. This leads to interval being cleared
                and again called on every re-render. This is not the desired behavior. To solve 
                this problem we can use <b>functional update form of setState:</b>
                <p className='py-4 bg-white font-semibold'>setState( {`prevState => prevState`} + 1).</p>
                Doing this we can remove the count as depedency array and thus our interval will
                be called only once during mounting.
            </div>
        </div>
    )
}

export default FunctionalUpdateSetState;