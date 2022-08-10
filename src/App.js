import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/home.component'
import HOCExample from './components/hoc-example/hoc-example.component';
import ControlReRendering from './components/react-concepts/control-re-rending';
import ConceptUseMemo from './components/react-concepts/concept-usememo.component';
import ReactConcept from './pages/react-concept/react-concept.page';
import HooksPage from './pages/hooks/hooks.component';

import CustomHook from './components/custom-hook/custom-hook.component';

import './App.scss';

function App() {
  return (
    <div className='App bg-bermuda'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='hoc-example' element={<HOCExample/>}/>
        <Route path='react-concepts' element={<ReactConcept/>}/>
        <Route path='control-rerendering' element={<ControlReRendering/>}/>
        <Route path='use-memo' element={<ConceptUseMemo/>}/>
        <Route path='hooks' element={<HooksPage/>} />
        <Route path='custom-hooks' element={<CustomHook/>}/>
      </Routes>
    </div>
  );
}

export default App;