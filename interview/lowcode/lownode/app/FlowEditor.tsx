'use client'
import React, {
    useCallback,
    useState,
    useEffect
} from 'react'
import ReactFlow, {
    Background,
    Controls,
    addEdge,
    Connection,
    Edge,
    Node
} from 'reactflow'
import 'reactflow/dist/style.css'
import { supabase } from '@/lib/supabaseClient'

// 自定义样式
const customStyles = `
  .react-flow__node {
    transition: all 0.2s ease-in-out;
  }
  
  .react-flow__node:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
  }
  
  .react-flow__handle {
    width: 8px;
    height: 8px;
    background: #3b82f6;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .react-flow__handle:hover {
    background: #2563eb;
    transform: scale(1.2);
  }
  
  .react-flow__edge-path {
    stroke: #3b82f6;
    stroke-width: 2;
  }
  
  .react-flow__edge:hover .react-flow__edge-path {
    stroke: #2563eb;
    stroke-width: 3;
  }
  
  .react-flow__controls {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .react-flow__controls-button {
    background: white;
    border: 1px solid #e5e7eb;
    color: #374151;
    transition: all 0.2s ease;
  }
  
  .react-flow__controls-button:hover {
    background: #f9fafb;
    border-color: #d1d5db;
    color: #111827;
  }
`

export default function FlowEditor() {
    const [edges, setEdges] = useState<Edge[]>([])
    const [nodeId, setNodeId] = useState(2)
    // 统一的节点样式
    const getNodeStyle = (isStart = false) => ({
        background: isStart ? '#3b82f6' : 'white',
        border: isStart ? 'none' : '2px solid #e5e7eb',
        borderRadius: '12px',
        boxShadow: isStart 
            ? '0 4px 12px rgba(59, 130, 246, 0.3)' 
            : '0 2px 8px rgba(0, 0, 0, 0.1)',
        fontSize: '14px',
        fontWeight: '500',
        color: isStart ? 'white' : '#374151',
        minWidth: '120px',
        textAlign: 'center' as const,
        padding: '12px 16px',
    })

    const [nodes, setNodes] = useState<Node[]>([
        {
            id: '1',
            position: { x: 100, y: 100 },
            data: { label: '开始节点' },
            style: getNodeStyle(true),
        }
    ])

    // 处理节点连接
    const onConnect = useCallback((params: Connection) => {
        setEdges((eds) => addEdge(params, eds))
    }, [])

    const addNode = () => {
        const newId = String(nodeId)
        // 随机位置避免重叠
        const newNode: Node = {
            id: newId,
            position: {
                x: 100 + Math.random() * 200,
                y: 100 + Math.random() * 200
            },
            data: { label: `节点 ${newId}` },
            style: getNodeStyle(false),
        }
        setNodes((nds) => [...nds, newNode])
        setNodeId(id => id + 1)
    }

    const removeNode = () => {
        if (nodes.length > 1) {
            const lastNode = nodes[nodes.length - 1]
            setNodes((nds) => nds.filter(node => node.id !== lastNode.id))
            setEdges((eds) => eds.filter(edge =>
                edge.source !== lastNode.id && edge.target !== lastNode.id
            ))
        }
    }

    const saveFlow = async () => {
        const { error } = await supabase.from('flows').insert({
            name: 'demo flow',
            nodes,
            edges
        })
        if (error) {
            console.error('保存失败', error)
        } else {
            console.log('保存成功')
        }
    }
    const onNodeDoubleClick = (_: React.MouseEvent, node: Node) => {
        //console.log('节点双击', node)
        const newLabel = prompt('请输入节点内容', node.data.label as string)
        if (newLabel !== null && newLabel.trim() !== '') {
            setNodes(nds => nds.map(n => n.id === node.id ?
                { ...n, data: { ...n.data, label: newLabel } } : n
            ))
        }
    }
    useEffect(() => {
        const loadFlow = async () => {
            try {
                const { data } = await supabase
                    .from('flows')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(1)
                    .single()
                
                if (data && data.nodes && data.nodes.length > 0) {
                    // 为加载的节点应用统一样式
                    const styledNodes = data.nodes.map((node: Node, index: number) => ({
                        ...node,
                        style: getNodeStyle(index === 0) // 第一个节点作为开始节点
                    }))
                    
                    setNodes(styledNodes)
                    setEdges(data.edges || [])
                    
                    // 计算最大ID
                    const maxId = data.nodes
                        .map((n: Node) => Number(n.id))
                        .reduce((a: number, b: number) => Math.max(a, b), 1)
                    setNodeId(maxId + 1)
                }
            } catch (error) {
                console.log('没有找到保存的流程图，使用默认节点')
                // 如果加载失败，保持默认节点
            }
        }
        loadFlow()
    }, [])

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            <div className="w-full h-screen bg-gray-50 flex flex-col">
            {/* 顶部工具栏 */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">流程图编辑器</h1>
                    <div className="flex items-center space-x-3">
                        <button 
                            onClick={addNode}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                        >
                            + 添加节点
                        </button>
                        <button 
                            onClick={removeNode}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
                        >
                            - 删除节点
                        </button>
                        <button 
                            onClick={saveFlow}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                        >
                             保存
                        </button>
                    </div>
                </div>
            </div>

            {/* 流程图画布 */}
            <div className="flex-1 relative">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onConnect={onConnect}
                    fitView={true}
                    onNodeDoubleClick={onNodeDoubleClick}
                    className="bg-gray-50"
                    nodeTypes={{}}
                    defaultEdgeOptions={{
                        style: { 
                            stroke: '#3b82f6', 
                            strokeWidth: 2,
                            strokeDasharray: '0',
                        },
                        type: 'smoothstep',
                        animated: false,
                    }}
                    connectionLineStyle={{
                        stroke: '#3b82f6',
                        strokeWidth: 2,
                        strokeDasharray: '5 5',
                    }}
                    connectionLineType="smoothstep"
                >
                    <Background 
                        color="#e5e7eb" 
                        gap={20} 
                        size={1}
                        variant="dots"
                    />
                    <Controls 
                        className="bg-white border border-gray-200 rounded-lg shadow-sm"
                        style={{
                            button: {
                                backgroundColor: 'white',
                                border: '1px solid #e5e7eb',
                                color: '#374151',
                            }
                        }}
                    />
                </ReactFlow>
            </div>
        </div>
        </>
    )
}