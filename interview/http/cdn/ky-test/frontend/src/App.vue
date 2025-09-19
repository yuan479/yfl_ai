<template>
  <div>
    <h1>User</h1>
  </div>
</template>

<script setup>
async function fetchUser(){
  try {
    //前端知道访问的地址和域名
    //委托vite 
    const res = await fetch('/api/user')
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.error('获取用户数据失败:', error)
  }
}
fetchUser()
</script>
