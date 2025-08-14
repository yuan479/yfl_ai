import {ref,onMounted,onUnmounted} from 'vue'

export function useMouse(){
    const x=ref(0)
    const y=ref(0)
    const updataMousePosition=(e)=>{
        x.value=e.clientX
        y.value=e.clientY
    }
    onMounted(() => {
        //console.log('页面挂载完成')
        window.addEventListener('mousemove', updataMousePosition)
      })
      
      onUnmounted(() => {
        //console.log('页面卸载完成')
        window.removeEventListener('mousemove', updataMousePosition)
      })
    return{
        x,y,
    }
}