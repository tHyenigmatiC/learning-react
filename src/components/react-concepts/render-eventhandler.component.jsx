// NOTE: Each Render Has Its Own Event Handlers
// Demonstration Steps: 
// 1. Increment the counter to 3
// 2. Press “Show alert”
// 3. Increment it to 5 before the timeout fires
// see what count is shown in the alert, is it 3 or 5?
import { useEffect, useState } from "react"

const RenderEventHandlerExample = () => {
    const [ count, setCount ] = useState(0);
    const [ showAnswer, setShowAnswer ] = useState(false);


    useEffect( () => {
        if (!showAnswer) return;
        setTimeout(() => {
            setShowAnswer(false);
            setCount(0);
        }, 20000)
    }, [showAnswer])


    const handleShowAlert = () => {
        setTimeout(() => {
            alert('Value of count is: ' + count);
            setShowAnswer(true);
        }, 3000)
    }

    return (
        <div className='flex flex-col items-center w-3/5 bg-blue-200 h-min'>
            <p className='w-full p-4 bg-white rounded-sm'>
                <b>NOTE: Each Render Has Its Own Event Handlers</b><br/>
                Demonstration Steps: <br/>
                1. Increment the counter to 3<br/>
                2. Press “Show alert”<br/>
                3. Increment it to 5 before the timeout fires<br/>
                4. See what value of count is shown in the alert, is it 3 or 5?<br/>
            </p>
            {
                showAnswer ? <p className="p-4">
                    <b>Why does is shows 3?</b><br/>
                    <b>Ans:</b> It is because when the onClick event handler is called,
                        the value of count variable 3. So it passes 3
                        to the handler function. But after we change the value to 5
                        it won't know that the value of count
                        has been changed; as the new value renders new component, which has its
                        own onClick event handler.<br/><br/>
                        <b>The alert will “capture” the state at the time I clicked the button.</b>


                </p> : 
                <>
                    <p className="p-4 text-xl text-center">You clicked <b>{ count }</b> times</p>
                    <button className='p-2 m-4 text-white bg-green-700 rounded' onClick={ () => setCount( prevCount => prevCount + 1 ) } > 
                        Increase Count 
                    </button>
                    <button className='p-2 m-4 text-white bg-green-700 rounded' onClick={handleShowAlert} > 
                        Show Alert 
                    </button>
                </>
            }
        </div>
    )
}

export default RenderEventHandlerExample;