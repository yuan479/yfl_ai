// zustand react 状态管理框架
import { create } from 'zustand'
//create 创建一个store 仓库存储状态
// 创建一个count store ,以use开头，说明它是一个hook
export const useCounterStore = create((set) => ({
    //对象，里面包含着状态以及修改状态的方法
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
}))


