import { supabase } from './lib/supabaseClient.mjs'
//Backend as service
// 异步，node
/* const {error} = await supabase.from("todos").insert({
    title:'AI 从入门到入土',
    is_complete:false
})

console.log(error); */
const {data,error} = await supabase.from("todos").select("*")
console.log(data);