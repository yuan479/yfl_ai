import { useState } from "react"


function TodoForm(props) {
    const onAdd = props.onAdd
    const [text,setText]=useState('啊哈？')
const handsubmit=(e)=>{
    //阻止默认的提交行为
    //由js来控制
    e.preventDefault()
    /* console.log(e.target.value) */
    onAdd(text)
    //todos? 父组件改不了 只能打报告
}
const handleChange=(e)=>{
    setText(e.target.value)
}
    return (
      <form action="http://www.baidu.com" onSubmit={handsubmit}>
        <input type="text" placeholder="请输入事件" value={text} onChange={handleChange}/>
        <button name='submit'>添加</button>
      </form>
    )
}
export default TodoForm;