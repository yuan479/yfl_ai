import { Outlet, useNavigate,useLocation } from "react-router-dom"
import { Tabbar, Search } from "react-vant"
import { useState,useEffect } from "react"
import { HomeO, CouponO, FriendsO, StarO, UserO } from "@react-vant/icons"

const tabs = [
  { title: "首页", icon: <HomeO />, path: '/home' },
  { title: "折扣", icon: <CouponO />, path: '/discount' },
  { title: "行程", icon: <FriendsO />, path: '/trip' },
  { title: "收藏", icon: <StarO />, path: '/collection' },
  { title: "我的", icon: <UserO />, path: '/account' }
]
const MainLayout = () => {
  const [active, setActive] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(location.pathname)
    const index = tabs.findIndex(
      tab => location.pathname.startsWith(tab.path)
    )
    setActive(index)
  },[])

  return (
    <>
      <Search placeholder="请输入搜索内容" />
      <Outlet />
      <Tabbar value={active} onChange={
        (key) => {
          setActive(key)
          navigate(tabs[key].path)
        }}>
        {tabs.map((tab, index) => (
          <Tabbar.Item key={index} icon={tab.icon}>{tab.title}</Tabbar.Item>
        ))}
      </Tabbar>
    </>
  )
}
export default MainLayout