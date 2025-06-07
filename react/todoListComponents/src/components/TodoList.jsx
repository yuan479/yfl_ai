//内置的hook 函数
import '../Todo.css'
import TodoFrom from './TodoFrom'
import Todos from './Todos'
import { useState } from 'react'
function TodoList() {
    // 数据驱动的页面
    //静态页面？
    // DOM数组-》map-》join('')->innerHTML 底层api编程
    // 面向业务
    //缺点：低效 面向API 
    // 面向业务 懂业务 
    //业务：数据 ->变化 ->数据状态-> 自动刷新页面 -> 数据驱动页面
    //数组，第一项是数据变量，第二项是函数，当它执行，会传入新的todos，页面自动更新
    // {todos.map}
    //settodos  DOM 及动态更新
    // 响应式界面开发 
    /* console.log(useState('一笑而过')) */
    // hi 是数据状态，setHi 是修改数据状态的方法
    //es6 解构赋值
    const [hi, setHi] = useState('hi,想我了吗？ ♪  ')
/*   const hi = useState('一笑而过')[0]
  const setHi = useState('一笑而过')[1] */
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState([
        { id: 1, text: '脱单', completed: false },
        { id: 2, text: '摆烂', completed: false },
        { id: 3, text: '国泰民安', completed: false }
    ])
 /*    setTimeout(() => {
        setTodos([
            ...todos,
            {
                id: 4, text: '不劳而获', completed: false
            }
        ])
        setTitle('')
        setHi('想我了吗')
    }, 3000) */
    const handleAdd=(text)=>{
        setTodos([
            ...todos,{
                id:todos.length-1,
                text,
                completed:false
            }
        ])
    }
    return (
        <div className='container'>
            <h3 className='title'>{title} {hi}</h3>
            {/* 表单 */}
            <TodoFrom onAdd={handleAdd}/>
            {/* 列表 */}
            <Todos todos={todos} />

        </div>

    )
}


export default TodoList