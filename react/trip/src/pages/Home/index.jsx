import useTitle from "../../hooks/useTitle"
import {Search,Button} from "react-vant"
import {useNavigate} from 'react-router-dom'
import { showToast } from "@/components/Toast/toastController"


const Home =()=>{
    useTitle('奶龙首页')
    const navigate= useNavigate()
    return(
      <>
      <Search onClickInput={()=>navigate('/search')}></Search>
        <h1 >我是奶龙首页</h1> 
          <Button type ="primary" onClick={()=>showToast(3,6,9)}>这是一个按钮</Button>
          
        
      </>
    )
  }
  
  export default Home
  