import ReactFlow, { MiniMap } from "react-flow-renderer";
import "./index.css";
import defaultNodes from "./nodes.js";
import defaultEdges from "./edges.js";

function Flow() {
  return (
    <div style={{ height: 600 }}>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        fitView
      >
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default Flow;
