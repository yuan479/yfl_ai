// supbase 去做向量化的知识库数据
//console.log("给爷爬！")
// langchain loader 是RAG的基础功能 txt ,pdf,excel...
//加载网页内容
import {createOpenAI} from '@ai-sdk/openai'
import {PuppeteerWebBaseLoader} from '@langchain/community/document_loaders/web/puppeteer'

console.log('ahhhhh')
const scrapePage = async (url: string): Promise<string> => {
    const loader = new PuppeteerWebBaseLoader(url, {
      launchOptions: {
        headless: true,
      },
      gotoOptions: {
        waitUntil: 'networkidle0',
      },
      evaluate: async(page, browser) => {
        const result = await page.evaluate(() => document.body.innerHTML);
        await browser.close();
        return result;
      }
    });
  
    return await loader.scrape();
  }
//知识库来源，可配置

loadData([
    "https://en.wikipedia.org/wiki/Samsung_Galaxy_S25",
    // "https://en.wikipedia.org/wiki/Samsung_Galaxy_S24",
    // "https://en.wikipedia.org/wiki/IPhone_16",
    // "https://en.wikipedia.org/wiki/IPhone_16_Pro",
    // "https://en.wikipedia.org/wiki/IPhone_15",
    // "https://en.wikipedia.org/wiki/IPhone_15_Pro",
  ]);