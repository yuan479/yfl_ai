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

export default function FlowEditor() {
    const [edges, setEdges] = useState<Edge[]>([])
    const [nodeId, setNodeId] = useState(2)
    const [nodes, setNodes] = useState<Node[]>([
        {
            id: '1',
            position: { x: 100, y: 100 },
            data: { label: '开始节点' },
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
            const { data } = await supabase
                .from('flows')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(1)
                .single()
            if (data) {
                setNodes(data.nodes || [])
                setEdges(data.edges || [])
                const maxId = data.node?.map(
                    (n: Node) => Number(n.id)
                ).reduce((a: number, b: number) => Math.max(a, b), 1) || 1
                setNodeId(maxId + 1)
            }
        }
        loadFlow()

    }, [])

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div style={{ marginBottom: 10 }}>
                <button onClick={addNode} style={{ marginRight: 10 }}>添加节点</button>
                <button onClick={removeNode} style={{ marginRight: 10 }}>删除节点</button>
                <button onClick={saveFlow} style={{ marginRight: 10 }}>保存到数据库</button>
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onConnect={onConnect}
                fitView={true}
                onNodeDoubleClick={onNodeDoubleClick}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}