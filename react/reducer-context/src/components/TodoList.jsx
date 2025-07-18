import { useTodoContext } from '../hooks/useTodoContext'


const TodoList = () => {
    const {
        todos,
        toggleTodo,
        removeTodo
    } = useTodoContext()
    return (
        <>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <span onClick={() => toggleTodo(todo.id)}
                            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => removeTodo(todo.id)} style={{ 'margin-left': '10px', 'margin-top': '10px' }}>删除</button>
                    </li>
                ))
            }
        </>
    )
}

export default TodoList