import {
    useState //私有状态
} from 'react'


const TodoForm = ({ onAddTodo }) => {
    // props 和state 都是数据 
    // props 参数数据
    // state 私有数据
    //单向数据流 所以一般在父组件处理数据，子组件消费数据，父组件数据改变，子组件数据也会改变
    const [text, setText] = useState('')
    /* JSX 一定得由唯一的最外层元素 树状结构来编译并解析JSX */
    const handleSubmit = (e) => { //事件对象
        e.preventDefault()
        let result = text.trim() //不要代码重复 
        if (!result) return
        onAddTodo(result)
        setText('') //数据状态和界面状态要敏感
    }


    return (

        <>
            <h1 className="header">TodoList</h1>
            <form className="todo-input" onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    value={text}
                    //维护数据值与input状态的同步
                    onChange={e => setText(e.target.value)} //把输入框的值赋值给text，如果没有，不能输入
                    required
                    placeholder="请输入内容"

                />
                <button type="submit">添加</button>



            </form>
        </>


    )
}
export default TodoForm