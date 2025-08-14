import { ref, computed } from 'vue'

export function useTodos() {
    let title = ref('')
    let todos = ref([
        {
            title: '学习Vue3',
            done: false
        }
    ])

    //未完成的数量
    let active = computed(() => {
        return todos.value.filter((v) => !v.done).length
    })
    let all = computed(() => todos.value.length
    )
    let allDone = computed({
        get: function () {
            return active.value === 0
        },
        set: function (value) {
            todos.value.forEach(todo => {
                todo.done = value
            })
        }

    })

    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = ''
    }
    function clear() {
        //done为true的清除
        todos.value = todos.value.filter((v) => !v.done)
    }

    return {
        title,
        addTodo,
        clear,
        todos,
        active,
        all,
        allDone
    }
}