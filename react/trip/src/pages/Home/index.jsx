import useTitle from "../../hooks/useTitle"
import {Search} from "react-vant"
import {useNavigate} from 'react-router-dom'


const Home =()=>{
    useTitle('奶龙首页')
    const navigate= useNavigate()
    return(
      <>
      <Search onClickInput={()=>navigate('/search')}></Search>
        <h1 onClick={()=>navigate('/detail/1')}>我是奶龙首页</h1> 
      </>
    )
  }
  
  export default Home
  