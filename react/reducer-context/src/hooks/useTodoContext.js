import { TodoContext } from "../TodoContext";
import { useContext } from "react";



//自定义hooks
export function useTodoContext(){
    return useContext(TodoContext);
}