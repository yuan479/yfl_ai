//列表的渲染
function Todos(props) {
    //如何拿到父组件拿过来的数据？
    console.log(props, '*************')
    const todos = props.todos
    return (

        <ul>
            {
                //当下这个位置
                //数据为王，界面是被驱动的
                //数据驱动
                // 数据绑定 data binding
                // 
                todos.map(todo => (
                    <li key={todo.id}> {todo.text}</li>
                )
                )
            }

        </ul>
    )
}
export default Todos
