import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import {ThemeContext} from './ThemeContext'

function App() {
  console.log(ThemeContext)
  return (

    <ThemeContext.Provider value="dark"> {/* 向ThemeContext里面的所有组件提供一个value */}
     {/*   <Partent>
        <Child>
          <GrandChild>
            <GreatGrandChild>

            </GreatGrandChild>
          </GrandChild>
        </Child>
       </Partent> */}

       <Page/>
       {/* <Uncle/> */}
       </ThemeContext.Provider>
  )
}

export default App
