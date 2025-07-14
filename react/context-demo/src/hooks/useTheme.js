//自定义hooks，把我们的业务全部封装进去
//优点： 复用性高， 代码清晰 hooks + component readerer
import {useContext} from 'react'
import {ThemeContext} from '../ThemeContext'


export function useTheme(){
    return useContext(ThemeContext)
}