import {useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'
 
// hooks 函数都以use开头,是函数，里面可以使用响应式状态和生命周期
// 很好用
const Child =()=>{
    const theme = useContext(ThemeContext) // 从context中拿到value
    return(
       <div className={theme}>

       </div>
    ) 
}

export default Child