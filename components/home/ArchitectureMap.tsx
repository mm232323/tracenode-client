"use client";

import { useMemo } from "react";
import {
    ReactFlow,
  Background,
  BackgroundVariant,
  Edge,
  Handle,
  Node,
  Position,
} from "@xyflow/react";
// import "reactflow/dist/style.css";

type ServiceData = {
  label: string;
  sub?: string;
  color?: string;
};

function ServiceNode({ data }: { data: ServiceData }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0B0B10]/90 px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm min-w-32">
      <Handle
        type="target"
        position={Position.Top}
        className="h-1.5! w-1.5! border-none! bg-white/20!"
      />
      <div className="flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ background: data.color ?? "#6366F1" }}
        />
        <div className="leading-tight">
          <p className="text-[11px] font-medium text-white/90">{data.label}</p>
          {data.sub ? (
            <p className="text-[9px] text-white/35">{data.sub}</p>
          ) : null}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="h-1.5! w-1.5! border-none! bg-white/20!"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="h-1.5! w-1.5! border-none! bg-white/20!"
      />
    </div>
  );
}

const nodeTypes = { service: ServiceNode };

const initialNodes: Node<ServiceData>[] = [
  {
    id: "frontend",
    type: "service",
    position: { x: 360, y: 20 },
    data: { label: "Web App", sub: "Next.js", color: "#6366F1" },
  },
  {
    id: "gateway",
    type: "service",
    position: { x: 360, y: 110 },
    data: { label: "API Gateway", sub: "Express", color: "#6366F1" },
  },
  {
    id: "auth",
    type: "service",
    position: { x: 140, y: 210 },
    data: { label: "Auth Service", sub: "Node.js", color: "#00FF7B" },
  },
  {
    id: "users",
    type: "service",
    position: { x: 360, y: 210 },
    data: { label: "User Service", sub: "Node.js", color: "#00FF7B" },
  },
  {
    id: "payments",
    type: "service",
    position: { x: 590, y: 210 },
    data: { label: "Payment Service", sub: "Go", color: "#F59E0B" },
  },
  {
    id: "postgres",
    type: "service",
    position: { x: 250, y: 310 },
    data: { label: "Postgres", sub: "Database", color: "#38BDF8" },
  },
  {
    id: "redis",
    type: "service",
    position: { x: 590, y: 310 },
    data: { label: "Redis", sub: "Cache", color: "#F87171" },
  },
  {
    id: "notify",
    type: "service",
    position: { x: 780, y: 130 },
    data: { label: "Notifications", sub: "Worker", color: "#A78BFA" },
  },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "frontend", target: "gateway", style: { stroke: "#6366F1", opacity: 0.5 } },
  { id: "e2", source: "gateway", target: "auth", style: { stroke: "#6366F1", opacity: 0.35 } },
  { id: "e3", source: "gateway", target: "users", style: { stroke: "#6366F1", opacity: 0.35 } },
  { id: "e4", source: "gateway", target: "payments", style: { stroke: "#6366F1", opacity: 0.35 }, animated: true },
  { id: "e5", source: "auth", target: "postgres", style: { stroke: "#00FF7B", opacity: 0.3 } },
  { id: "e6", source: "users", target: "postgres", style: { stroke: "#00FF7B", opacity: 0.3 } },
  { id: "e7", source: "payments", target: "redis", style: { stroke: "#F59E0B", opacity: 0.3 } },
  { id: "e8", source: "gateway", target: "notify", sourceHandle: "right", style: { stroke: "#A78BFA", opacity: 0.3 }, animated: true },
];

export default function ArchitectureMap() {
  const nodes = useMemo(() => initialNodes, []);
  const edges = useMemo(() => initialEdges, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={{ padding: 0.3 }}
      minZoom={0.5}
      maxZoom={1.5}
      panOnScroll={false}
      zoomOnScroll={false}
      zoomOnPinch
      nodesDraggable
      nodesConnectable={false}
      elementsSelectable
      proOptions={{ hideAttribution: true }}
      className="architecture-map"
    >
      <Background
        variant={BackgroundVariant.Dots}
        gap={18}
        size={1}
        color="rgba(255,255,255,0.06)"
      />
    </ReactFlow>
  );
}
