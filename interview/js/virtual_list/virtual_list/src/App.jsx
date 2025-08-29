import { useState } from 'react'
import './App.css'
import VirtualList from './components/VirtualList'

const generateData = (count) => {
  Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `item${i}`,
    description: `这是第 ${i} 个item`
  }))
}

function App() {
  const data = generateData(10000)
  const renderItem = (item, index) => (
    <div style={{
      padding: '10px',
      borderBottom: '1px solid #ccc',
      backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#fff',
    }}>
      <strong>[{index}]</strong>{item.name}
      <p style={{ margin: "5px 0", fontSize: '0.9em', color: '#666' }}>{item.description}</p>
    </div>
  )

  return (

    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>虚拟列表</h1>
      <p>Smooth scrolling with virtual list</p>
      {/* 固定高度的虚拟列表 */}
      <VirtualList
        data={data}
        height={window.innerHeight - 100}
        itemHeight={80}
        renderItem={renderItem}
        overscan={3}/* 预渲染上下各三个额外项 */
      />
    </div>

  )
}

export default App
