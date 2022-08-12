import { useState } from "react";

const Demo = () => {
    const [ count, setCount ] = useState(0);

    const increaseCount = () => {
        setCount( c => c + 1 );
    }

    const decreaseCount = () => {
        setCount( c => c - 1 );
    }

    return (
        <div className="flex flex-col h-min items-center justify-center bg-gray-200 rounded w-96">
            <div className="m-4 flex justify-center items-center border-2 border-black rounded-sm w-max">
                <button className="mr-2 py-2 px-4 text-white text-3xl bg-green-500" onClick={increaseCount}>+</button>
                <InnerChild count={count}/>
                <button className="ml-2 py-2 px-6 text-white text-3xl bg-red-500" onClick={decreaseCount}> - </button>
            </div>
            <p className="p-4 mt-4 bg-white rounded-md">
                1. <b>Ignored:</b><br/> It is the new state value created inside child component using the props value
                as the initial value of the state (<b>eg: useState(props)</b>). Basically what we are doing here is we are copying the
                props into state. Due to this, its value is being ignored in the render.<br></br><br/>
                2. <b>Original:</b><br/> The value that actually must be shown by ( in ignored ) the component.
                <br/><br/>
                <b>Solution</b><br/>
                Use props directly in the child component.
            </p>
        </div>
    );

}


const InnerChild = ({ count }) => {

    const [ innerCount, setInnerCount ] = useState(count );

    // const magicNumber = () => {
    //     setInnerCount( innerCount + 5);
    // }

    console.log(innerCount);

    return (
        <>
            <p className="m-2">Ignored : {innerCount}</p>
            <p className="m-2">Original: {count}</p>
        </>
    )
}


export default Demo;