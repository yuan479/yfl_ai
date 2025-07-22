import { useEffect,memo } from'react'



const Button =({num})=>{
    useEffect(() => {
        console.log('Button-useEffect')
    }, [])
   
    console.log('Button***************************')
    return <button>{num}click me</button>
}


//高阶组件，tiantian
export default memo(Button)