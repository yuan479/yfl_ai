import{client} from './llm.mjs'
import fs from 'fs/promises'

const inputFilePath ='./data/posts_with_embedding.json'
const data = await fs.readFile(inputFilePath,'utf-8')
const posts = JSON.parse(data)
const cosineSimilarity = (v1, v2) => {
    // 计算向量的点积
    const dotProduct = v1.reduce((acc, curr, i) => acc + curr * v2[i], 0);
  
    // 计算向量的长度
    const lengthV1 = Math.sqrt(v1.reduce((acc, curr) => acc + curr * curr, 0));
    const lengthV2 = Math.sqrt(v2.reduce((acc, curr) => acc + curr * curr, 0));
  
    // 计算余弦相似度
    const similarity = dotProduct / (lengthV1 * lengthV2);
  
    return similarity;
  };

//向量检索？ consine函数，文本语义化，比如：你好和hello 相近
//LIKE 数据库 文本的检索

const response = await client.embeddings.create({
    model:'text-embedding-ada-002',
    input:`react,tailwindcss`
})
console.log(response.data[0].embedding)

const {embedding} = response.data[0]
const results = posts.map(item=>({
    ...item,
    similarity:cosineSimilarity(embedding,item.embeddings)
}))
.sort((a,b)=>a.similarity-b.similarity)
.reverse()
.slice(1,3)
.map((item,index)=>`${index+1}.${item.title},${item.category}`)
.join('/n')

console.log(results)