import { useReducer } from "react";
import todoReducer from "../reducers/todoReaducer";

//es6新特性 参数的默认值
//1. {todos, } 2. key:value 相同可省略 3. ``模板字符串 4. 解构 []=[] {}={} 5.展开运算符 ...[] rest运算符 
export function useTodos(inital=[]){
    const [todos,dispatch] = useReducer(todoReducer,inital);
    const addTodo = (text) => {
        dispatch({type:'Add_Todo',text})
    }
    const toggleTodo = (id) => {
        dispatch({type:'Toggle_Todo',id})
    }
    const removeTodo = (id) => {
        dispatch({type:'Remove_Todo',id})
    }
    return{
        todos,
        addTodo,
        toggleTodo,
        removeTodo,

    }
}