// NOTE: Each Render Has Its Own Event Handlers
// Demonstration Steps: 
// 1. Increment the counter to 3
// 2. Press “Show alert”
// 3. Increment it to 5 before the timeout fires
// see what count is shown in the alert, is it 3 or 5?
import { useEffect, useState, useRef } from "react"

const GetLatestValue = () => {
    const [ count, setCount ] = useState(0);
    const latestCount = useRef(count);

    useEffect( () => {
        latestCount.current = count;
    })


    const handleShowAlert = () => {
        setTimeout(() => {
            alert(`Value of count was ${count} when this handler was called`);
        }, 3000)
    }

    const handleShowAlertLatest = () => {
        setTimeout(() => {
            alert(`Value of count: ${latestCount.current}. Getting latest value using useRef`);
        }, 3000)
    }

    return (
        <div className='flex flex-col items-center w-3/5 bg-blue-200 h-min'>
            <p className="p-4 mb-4 text-xl font-semibold text-center">Capture only latest value of state on multiple re-renders. </p>
            <p className="p-4 text-xl text-center">You clicked <b>{ count }</b> times</p>
            <button className='p-2 m-4 text-white bg-green-700 rounded' 
                onClick={ () => setCount( prevCount => prevCount + 1 ) } > 
                Increase Count 
            </button>
            <button className='p-2 m-4 text-white bg-green-700 rounded' 
                onClick={handleShowAlert} > 
                Handler Bind with Render
            </button>
            <button className='p-2 m-4 text-white bg-green-700 rounded' 
                onClick={handleShowAlertLatest} > 
                Handler with Latest Value
            </button>
        </div>
    )
}

export default GetLatestValue;