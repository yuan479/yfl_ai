import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';

// 自定义节点：流程步骤节点（包含标题和配置按钮）
const StepNode = ({ data }) => {
  return (
    <div style={{ 
      width: 150, 
      height: 80, 
      background: '#fff', 
      border: '2px solid #3b82f6',
      borderRadius: 6,
      padding: 8,
    }}>
      <h4 style={{ margin: 0, fontSize: 14 }}>{data.label || '步骤'}</h4>
      <button 
        style={{ 
          fontSize: 12, 
          marginTop: 8, 
          background: '#3b82f6', 
          color: 'white', 
          border: 'none', 
          borderRadius: 3, 
          cursor: 'pointer' 
        }}
        onClick={() => alert(`配置节点：${data.id}`)}
      >
        配置
      </button>
    </div>
  );
};

// 节点类型映射（注册自定义节点）
const nodeTypes = {
  step: StepNode,
};

const FlowEditor = () => {
  // 初始化节点和边的状态
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // 处理节点连接
  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  // 添加新节点（模拟从左侧组件库拖拽）
  const addNewNode = (label, position) => {
    const newNode = {
      id: `node-${Date.now()}`, // 唯一ID
      type: 'step', // 使用自定义节点类型
      position, // 节点在画布中的位置
      data: { label }, // 节点携带的数据（可存储配置信息）
    };
    setNodes((nds) => [...nds, newNode]);
  };

  // 保存流程图配置（转换为JSON，供低代码平台生成逻辑）
  const saveFlow = () => {
    const flowConfig = {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        label: node.data.label,
        position: node.position,
      })),
      edges: edges.map(edge => ({
        source: edge.source,
        target: edge.target,
      })),
    };
    console.log('流程图配置：', JSON.stringify(flowConfig, null, 2));
    alert('配置已保存到控制台');
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      {/* 左侧组件库（模拟拖拽源） */}
      <div style={{ width: 150, padding: 16, background: '#f5f5f5' }}>
        <h3>流程组件</h3>
        <button 
          style={{ width: '100%', margin: '8px 0', padding: 8 }}
          onClick={() => addNewNode('开始', { x: 100, y: 100 })}
        >
          开始节点
        </button>
        <button 
          style={{ width: '100%', margin: '8px 0', padding: 8 }}
          onClick={() => addNewNode('审批', { x: 100, y: 250 })}
        >
          审批节点
        </button>
        <button 
          style={{ width: '100%', margin: '8px 0', padding: 8 }}
          onClick={() => addNewNode('结束', { x: 100, y: 400 })}
        >
          结束节点
        </button>
        <button 
          style={{ width: '100%', margin: '8px 0', padding: 8, background: 'green', color: 'white' }}
          onClick={saveFlow}
        >
          保存流程
        </button>
      </div>

      {/* 右侧画布（React Flow 核心） */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background /> {/* 网格背景 */}
        <Controls /> {/* 缩放/重置控件 */}
        <MiniMap /> {/* 迷你地图 */}
      </ReactFlow>
    </div>
  );
};

export default FlowEditor;
