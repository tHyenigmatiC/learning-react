import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home.component";
import HOCExample from "./components/hoc-example/hoc-example.component";
import ControlReRendering from "./components/react-concepts/control-re-rending.component";
import ConceptUseMemo from "./components/react-concepts/concept-usememo.component";
import ReactConcept from "./pages/react-concept/react-concept.page";
import HooksPage from "./pages/hooks/hooks.component";
import UseReducerExample from "./components/use-reducer/use-reducer.component";
import RenderEventHandlerExample from "./components/react-concepts/render-eventhandler.component";
import RenderEffectsExample from "./components/react-concepts/render-effects.component";
import GetLatestValue from "./components/react-concepts/state-get-latest-value.component";
import FunctionalUpdateSetState from "./components/react-concepts/functional-update-setstate.component";
import Demo from "./components/demo/demo.component";
import ReactPatternsPage from "./pages/react-patterns/react-patterns.component";
import ContextModuleFunction from "./features/context-module-function";

import CustomHook from "./components/custom-hook/custom-hook.component";

import "./App.scss";

function App() {
  return (
    <div className="App bg-bermuda">
      <Routes>
        <Route index element={<Home />} />
        <Route path="hoc-example" element={<HOCExample />} />
        {/* React Concepts */}
        <Route path="react-concepts" element={<ReactConcept />} />
        <Route path="control-rerendering" element={<ControlReRendering />} />
        <Route path="use-memo" element={<ConceptUseMemo />} />
        <Route
          path="render-eventhandler"
          element={<RenderEventHandlerExample />}
        />
        <Route path="state-get-latest" element={<GetLatestValue />} />
        <Route path="render-effects" element={<RenderEffectsExample />} />
        <Route
          path="functional-update-state"
          element={<FunctionalUpdateSetState />}
        />
        {/* React Hooks */}
        <Route path="hooks" element={<HooksPage />} />
        <Route path="custom-hooks" element={<CustomHook />} />
        <Route path="use-reducer" element={<UseReducerExample />} />
        <Route path="demo" element={ <Demo/>}/>
        {/* Advanced React Patterns */}
        <Route path="react-patterns" element={ <ReactPatternsPage/>}/>
        <Route path="context-module-function" element={ <ContextModuleFunction/>}/>
      </Routes>
    </div>
  );
}

export default App;
