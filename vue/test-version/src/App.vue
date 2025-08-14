<script setup>
//mvvm 响应式，数据绑定，状态管理，生命周期，hooks
//页面上晃来晃去，我要实时显示鼠标的（x，y）坐标
import { ref, onMounted, onUnmounted } from 'vue'
import { useMouse } from './hooks/useMouse'
import { useTodos } from './hooks/useTodos'

/* const x = ref(0)//响应式对象
const y = ref(0)

setTimeout(() => {
  x.value = 100
  y.value = 200
}, 2000)

const updataMousePosition = (event) => {
  x.value = event.clientX
  y.value = event.clientY
} */

/* onMounted(() => {
  //console.log('页面挂载完成')s
  window.addEventListener('mousemove', updataMousePosition)
})

onUnmounted(() => {
  //console.log('页面卸载完成')
  window.removeEventListener('mousemove', updataMousePosition)
}) */
const { x, y } = useMouse()
const { title,
  todos,
  addTodo,
  clear,
  active,
  all,
  allDome
} = useTodos()
</script>


<template>
  <!-- 数据绑定 -->
  <h1>{{ x }},{{ y }}</h1>

  <div>
    <!-- vue事件绑定@修饰符，enter -->
    <input type="text" v-model="title" @keydown.enter="addTodo">
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <imput type="checkbox" v-model="todo.done"/>
        <span>{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选
      <input type="checkbox" v-model="allDome" />
      <span>{{ active }}/{{ all }}</span>
    </div>
  </div>
</template>

<style scoped></style>
