import {
    //解决响应式状态 hook
    useState //react 函数式编程 好用的以use 开头的函数
} from 'react'


import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
const Todos = () => {
    //数据流管理
    // 父组件持有管理数据，随后通过props传递数据，子组件通过props里面的自定义函数通知父组件 （符合单向数据流规则）
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '脱单',
            sComplete: false,
        },
        {
            id: 2,
            text: '摆烂',
            sComplete: false,
        }
    ])
    //新增todo
    const addTodo = (text) => {
        setTodos([
            //当数据状态是对象的时候
            ...todos,
            {
                id: Date.now(),
                text,
                isComplete: false
            }
        ])
    }

    const onToggle = (id) => { //切换todo状态
        /*    console.log(id)
           for(let i=0;i<todos.length;i++){
               if(todos[i].id === id){
                   todos[i].isComplete = !todos[i].isComplete
               }
           }
           //state 是对象或数组的时候 不能直接修改  要先复制一份  然后修改  再赋值给state
           setTodos(todos)
           return */

        //todos 数组找到id isComplete 取反  变成！isComplete 
        //响应式？ 返回一个全新的todos map
        //返回一个新数组，遍历数组的每一项，把返回值作为新数组的每一项返回
        setTodos(todos.map(
            todo => todo.id === id
                ? { ...todo, isComplete: !todo.isComplete }
                : todo
        ))
    }
    const onDelete=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }
    return (
        <div className='app'>

            {/* 自定义事件 */}
            <TodoForm onAddTodo={addTodo} />

            <TodoList
                todos={todos}
                onToggle={onToggle}
                onDelete={onDelete}
            />

        </div>

    )
}
export default Todos