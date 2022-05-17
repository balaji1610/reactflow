// import ReactFlow, { MiniMap } from "react-flow-renderer";
import "./index.css";
// import defaultNodes from "./nodes.js";
// import defaultEdges from "./edges.js";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
import Nav from "./Components/Nav";
import Minimap from "./Components/minimap/Minimap";

function App() {
  return (
    // <div style={{ height: 600 }}>
    //   <ReactFlow
    //     defaultNodes={defaultNodes}
    //     defaultEdges={defaultEdges}
    //     fitView
    //   >
    //     <MiniMap />
    //   </ReactFlow>
    // </div>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Minimap />} />
      </Routes>
    </div>
  );
}

export default App;
