import React, { useState, useRef, useMemo } from 'react';

function AlwaysReRenderStandard(props) {
    const { variable, variableName } = props;
    const prevPropsRef = useRef(props);
    console.log(`ALWAYS: render-${variableName} = ${variable}`, {
      arePropsRefEqual: Object.is(prevPropsRef.current, props),
      areVariablesEqual: Object.is(prevPropsRef.current.variable, variable),
      areVariableNamesEqual: Object.is(prevPropsRef.current.variableName, variableName)
    });
    prevPropsRef.current = props;
    return (
      <div className='my-2'>{variable}</div>
    );
}

const ReRenderAlways = React.memo(({ variable, variableName }) => {
    console.log(`ALWAYS BIS: render-${variableName} = ${variable}`);
    return (
      <div className='my-2'>{variable}</div>
    );
}, () => false);


const ReRenderNever = React.memo(({ variable, variableName }) => {
console.log(`NEVER AGAIN: render-${variableName} = ${variable}`);
return (
    <div className='my-2'>{variable}</div>
);
}, () => true);


// it checks the props name as well as the props value
// might be some changes is necessary
// for customization. only look if you are having performance issues
const ReRenderOnRealChange = React.memo((props) => {
    console.log(props);
    const { variable, variableName } = props;
    console.log(`REAL CHANGE: render-${variableName} = ${variable}`);
    return (
      <div className='my-2'>{variable}</div> 
    );
  }, (prevProps, nextProps) => 
    prevProps.variableName === nextProps.variableName && 
    Object.is(prevProps.variable, nextProps.variable)
);


const ControlReRendering = () => {
    console.log('render-App');
    const [state, setState] = useState({ a: 'a' });
    const { a } = state;
    const {
      noChangeRight,
      noChangeWrong,
      changeARight,
      changeAWrong
    } = useMemo(() => ({
      noChangeRight: () => {
        // this is pointless, but it's just to prove a point :p
        setState((state) => ({ ...state, b: 'b' }));
      },
      noChangeWrong: () => {
        // this is pointless, but it's just to prove a point :p
        setState((state) => state);
      },
      changeARight: () => {
        // change the ref of the entire state
        setState((state) => ({ ...state, a: `${state.a}a` }));
      },
      changeAWrong: () => {
        setState((state) => {
          // manuate the state, but keep it's original ref
          state.a = `${state.a}a`;
          return state;
        });
      }
    }), [setState]);
    return (
      <div className='p-4 bg-blue-100 rounded h-min'>
        <button className='m-2 p-4 bg-white hover:bg-slate-500' onClick={noChangeRight}>no change right</button>
        <button className='m-2 p-4 bg-white hover:bg-slate-500' onClick={noChangeWrong}>no change wrong</button>
        <button className='m-2 p-4 bg-white hover:bg-slate-500' onClick={changeARight}>change A right</button>
        <button className='m-2 p-4 bg-white hover:bg-slate-500' onClick={changeAWrong}>change A wrong</button>
        <AlwaysReRenderStandard variable={a} variableName="a" />
        <ReRenderAlways variable={a} variableName="a" />
        <ReRenderNever variable={a} variableName="a" />
        <ReRenderOnRealChange variable={a} variableName="a" />
      </div>
    );
  }

export default ControlReRendering;