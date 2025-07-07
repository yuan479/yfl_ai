import {
    //解决响应式状态 hook
    useState //react 函数式编程 好用的以use 开头的函数
} from 'react'


import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
const Todos = ()=>{
    //数据流管理
    // 父组件持有管理数据，随后通过props传递数据，子组件通过props里面的自定义函数通知父组件 （符合单向数据流规则）
    const [todos,setTodos] = useState([
        {
            id:1,
            title:'脱单',
            sComplete:false,
        },
        {
            id:2,
            title:'摆烂',
            sComplete:false,
        }
    ])
    //新增todo
    const addTodo =()=>{
        //setTodo          
    }
    return (
        <div className='app'>
          Todos
          {/* 自定义事件 */}
          <TodoForm onAddTodo ={addTodo} />

          <TodoList todos={todos}/>

        </div>
      
    )
}
export default Todos