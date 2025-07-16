import { useState,useReducer } from 'react'
import './App.css'


/* function App() {


  return (
    <>
      <LoginContext.Provider>
        <ThemeContext.Provider>
          <TodosContext.Provider>
            <Layout>
              <Header />
              <Main />
              <Footer />
            </Layout>
          </TodosContext.Provider>
        </ThemeContext.Provider>
      </LoginContext.Provider>
    </>
  )
} */

  //它能管理很多
const initialState ={
  count :0,
  //isLogin: false,
  //theme: 'light',
}

// 管理（分部门）
// reducer纯函数 提供/返回 一个可靠的状态 
// 状态生产器
// case 状态修改的规定
const reducer = (state ,action)=>{
  //对于这个状态，我只能increment和decrement
  //{type:'increment}
  switch(action.type){
    case 'increment':
      //生成新的状态
    return {
      count:state.count +1
    };

    case 'decrement':
    return { 
      count:state.count -1
    };
    case 'incrementByNum':
      return{
        count:state.count +parseFloat(action.payload)
      }
    default:
      return state
  }
}

function App(){
// 初始值 initialValue
// 当前的状态值 旧状态 新状态
// 界面由当前的状态来驱动
// 修改状态的方法 setCount
// 响应式状态管理 useState有的它都有，高级
const [count ,setCount] = useState(0)
//dispatch 派发
// 参数固定，{type:' '} action_type
const [state, dispatch]= useReducer(reducer, initialState) //适合大型项目
  return (
    <>
      <p>Count:{state.count}</p>
      <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button onClick={()=>dispatch({type:'increment'})}> +1 </button>
      <button onClick={()=>dispatch({type:'decrement'})}> -1</button>
     
      <button onClick={()=>dispatch({type:'incrementByNum',payload:count})}> +??? </button>
    </>
  )
  
}

export default App
