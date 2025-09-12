import {embed,streamText} from 'ai'
import {createOpenAI} from '@ai-sdk/openai'
import {createClient} from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL??'',
  process.env.SUPABASE_KEY??''
)
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL
})

async function generateEmbedding(text:string){
return embed({
  model:openai.embedding('text-embedding-3-small'),
  value:text
})
}

async function fetchRelevantContext(embedding:number[]){
  const {
    data,
    error
  }= await supabase.rpc("get_releveant_chunks",{
    query_embedding:embedding,
    match_threshold:0.5,
    match_count:5
  })
  if(error){
    throw error
  }
}

export async function POST(req:Request){
  try{
    const {messages} = await req.json()
    const latestMessage = messages.at(-1).content
    //embedding
    const {embedding} = await generateEmbedding(latestMessage)
    //console.log(embedding)
    //相似度计算
    const context = await fetchRelevantContext(embedding)
  }catch(err){

  }
}