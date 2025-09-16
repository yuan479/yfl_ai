//编区域的数据由store 管理
import { create } from 'zustand'
// parentId + childern 可以构建出一个树元素

export interface Component {
    id:number;
    name:string;
    children:Component[];
    parentId?:number;
}

interface State{
    components:Component[];
}
//store 主要提供State & Actions