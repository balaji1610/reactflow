import ReactFlow, { MiniMap } from "react-flow-renderer";

import defaultNodes from "./nodes";
import defaultEdges from "./edges";

function Minimap() {
  return (
    <div style={{ height: 600, position: "relative", top: "45px" }}>
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
export default Minimap;
