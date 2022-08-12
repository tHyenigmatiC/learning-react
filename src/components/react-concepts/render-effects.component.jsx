// Each Render Has Its Own Effects
import { useEffect, useState } from "react"

const RenderEffectsExample = () => {
    const [ count, setCount ] = useState(0);

    // safe use of useEffect when passing no depedency array
    // as there is no change state or props is triggered
    // it won't be causing infinite loop
    useEffect( () => {
        document.title = `${count}`;

        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    });

    // The above useEffect is not equivalent to the following class implementation
    // as this.state always gives the lastes value of the state
    // componentDidUpdate() {
    //     setTimeout(() => {
    //       console.log(`You clicked ${this.state.count} times`);
    //     }, 3000);
    //   }
    // A closure is the combination of a function and the lexical environment 
    // within which that function was declared
    // live bindings

    return (
        <div className='flex flex-col items-center w-3/5 bg-blue-200 h-min'>
            <p className="p-4 text-xl text-center">You clicked <b>{ count }</b> times</p>
            <button className='p-2 m-4 text-white bg-green-700 rounded' 
                onClick={ () => setCount( prevCount => prevCount + 1 ) } > 
                Increase Count 
            </button>
            <p className="p-4">
                Look at the title of this page<br/><br/>
                <b>Each Render Has Its Own Effects</b><br/><br/>
                Same like every render has its own event handlers, every render also
                does have its own effects. It cleared my confusion where I thought that useEffect
                monitors at any changes occuring to the state. But instead, what
                happens actually is; when the state value changes, a new component is rendered where
                new value of count is passed. Our useEffect hook will be getting this new value and 
                thus every time we increase the counter it renders new component with new value;
                and the value used by useEffect is also updated.<br/> <br/>
                <i>Conceptually, you can imagine effects are a part of the render result. See concept of
                    closure in javascript for reference.
                </i>
            </p>
        </div>
    )
}

export default RenderEffectsExample;