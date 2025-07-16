import {useTodoContext} from '../hooks/useTodoContext'
import {
    useState,

} from 'react'
 
const AddTodo =()=>{

    const [text ,setText] = useState('')
    const {addTodo} =useTodoContext() //跨层级
    const handleSubmit = (e)=>{
        e.preventDefault()

        if(text.trim()){
            addTodo(text.trim())
            setText("")
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button type="submit">Add </button>
        </form>
        </>
    )
}

export default AddTodo