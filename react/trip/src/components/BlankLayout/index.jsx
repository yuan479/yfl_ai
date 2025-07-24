import { Outlet } from "react-router-dom"

const BlankLayout = () => {
  return (
    <>
      <Outlet />
      <h1>我是BlankLayout页面</h1>
    </>
  )
}
export default BlankLayout