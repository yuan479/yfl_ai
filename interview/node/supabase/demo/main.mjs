import { supabase } from './lib/supabaseClient.mjs'
//Backend as service
// 异步，node
const {data,error} = await supabase.from("todos").insert({
    title:'AI 从入门到入土',
    iscomplate:false
})
config()

console.log(error);
