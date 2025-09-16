import ReactDom from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDom.createRoot(
  document.getElementById('root')!//非空断言
).render(<App />)