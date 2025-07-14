import{Navigate,useLocation} from 'react-router-dom'

// 鉴权组件
const ProtectRoute = (props) => {
    console.log(props)
    const {childern} = props  //这里的 childern 不是子组件，而是props里面的 childern 属性，提升定制性,相当于插槽
    const {pathname} = useLocation()//获取当前路径
    console.log(location.pathname)
    const isLogin = localStorage.getItem('isLogin')==='true'
    console.log(isLogin)
    if(!isLogin){
        return<Navigate to="/login" state={{form:pathname}}/>
    }
    return childern
  }
  export default ProtectRoute