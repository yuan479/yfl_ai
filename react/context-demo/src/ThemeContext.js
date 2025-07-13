// 主题（比如夜间模式） 适合全局
import{createContext} from 'react' //创建一个上下文对象

//createContext() 接受一个默认值作为参数，返回一个Context 
export const ThemeContext = createContext('light')//淡色白天主题