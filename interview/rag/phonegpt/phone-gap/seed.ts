// supabase 去做向量化的知识库数据
// langchain  loader 是 RAG的基础功能 txt,pdf,excel....
// 加载网页内容
import { createOpenAI } from "@ai-sdk/openai";
import {
  PuppeteerWebBaseLoader
} from '@langchain/community/document_loaders/web/puppeteer'
import {
  RecursiveCharacterTextSplitter//递归文本切割
} from 'langchain/text_splitter'
import {
  embed,//向量嵌入
} from 'ai'
import { config } from 'dotenv'
import "dotenv/config"
import { createClient } from '@supabase/supabase-js'

console.log('开始向量化知识库数据');

const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_KEY ?? ""
)

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL
})

const spliteer = new RecursiveCharacterTextSplitter({
  chunkSize: 512,//切割的长度 512个字符，包含一个比较独立的语义
  chunkOverlap: 100,//切割块的重叠部分长度
})

const scrapePage = async (url: string): Promise<string> => {
  const loader = new PuppeteerWebBaseLoader(url, {
    launchOptions: {
      executablePath: "C:\\Program Files (x86)\\Lenovo\\SLBrowser\\SLBrowser.exe",
      headless: true,

    },
    gotoOptions: {
      waitUntil: 'networkidle0',
    },
    evaluate: async (page, browser) => {
      const result = await page.evaluate(() => document.body.innerHTML);
      await browser.close();
      return result;
    }
  });
  //gm 正则修饰符
  //^ 在[^>]里面表示 “不是>的字符”
  return (await loader.scrape()).replace(/<[^>]*>?/gm, "");
}
const loadData = async (webpages: string[]) => {
  for (const url of webpages) {
    const content = await scrapePage(url);
    //console.log(content);
    const chunks = await spliteer.splitText(content)
    //console.log(chunks,"!!!!!!!!!!!!!!!!!!")
    for(let chunk of chunks){
    const { embedding } = await embed({
      model: openai.embedding('text-embedding-3-small'),
      value: chunk
    })
    console.log(embedding, "??????????????")
    
    const { error } = await supabase.from('chunks').insert({
      content: chunk,
      vector: embedding,
      url: url
    })
    if (error) {
      console.error(error);
    }
  }
} 
}


// 维护一个知识库，知识库的来源可配置
loadData([
  "https://en.wikipedia.org/wiki/Samsung_Galaxy_S25",
  // "https://en.wikipedia.org/wiki/Samsung_Galaxy_S24",
  // "https://en.wikipedia.org/wiki/IPhone_16",
  // "https://en.wikipedia.org/wiki/IPhone_16_Pro",
  // "https://en.wikipedia.org/wiki/IPhone_15",
  // "https://en.wikipedia.org/wiki/IPhone_15_Pro",
]);