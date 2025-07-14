import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import {ThemeContext} from './ThemeContext'

function App() {
  const [theme,setTheme] = useState('light')
  console.log(ThemeContext)
  return (

    <ThemeContext.Provider value={theme}> {/* 向ThemeContext里面的所有组件提供一个value */}
    {/* Provider组件 */}
     {/*   <Partent>
        <Child>
          <GrandChild>
            <GreatGrandChild>

            </GreatGrandChild>
          </GrandChild>
        </Child>
       </Partent> */}

       <Page/>
       <button onClick={()=>setTheme("dark")}>切换主题</button>
       {/* <Uncle/> */}
       </ThemeContext.Provider>
  )
}

export default App
