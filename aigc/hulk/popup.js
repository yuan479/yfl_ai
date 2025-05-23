// 当点击扩展程序中的按钮时触发事件
document.getElementById('changeColor').addEventListener('click', async () => {
  // 获取当前活动标签页并执行脚本
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      // 获取皮卡丘图片的URL并设置背景
      const extensionUrl = chrome.runtime.getURL('images/pikaqiu.png');
      Object.assign(document.body.style, {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('${extensionUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      });

      // 添加样式规则
      const style = document.createElement('style');
      style.textContent = `
        /* 设置容器背景透明，保持文字不透明 */
        div, section, article, aside, nav, main, header, footer {
          background-color: transparent !important;
        }
        * { opacity: 1 !important; }
      `;
      document.head.appendChild(style);
    }
  });
}); 