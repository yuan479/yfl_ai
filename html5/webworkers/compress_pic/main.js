//主线程 也是单线程
//event loop
//启动一个web worker 线程
const worker = new Worker('./compressWorker.js')

worker.onmessage = function(e) {
    console.log(e.data)
    if (e.data.success) {
        document.getElementById('output').innerHTML = 
        `<img src="${e.data.data}" style="max-width: 100%; height: auto;"/>`
    } else {
        document.getElementById('output').innerHTML = 
        `<p style="color: red;">压缩失败: ${e.data.data}</p>`
    }
}

function handleFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    })
}

async function compressFile(file) {
    const imgDataUrl = await handleFile(file);
    console.log(imgDataUrl, '!!!!!!!!!!!!')
    
    // 显示加载状态
    document.getElementById('output').innerHTML = '<p>正在压缩图片...</p>'
    
    worker.postMessage({
        imgData: imgDataUrl,
        quality: 0.5
    })
}

const oFile = document.getElementById('fileInput');
oFile.addEventListener('change', async function(e) {
    const file = e.target.files[0];
    if (!file) return;
    await compressFile(file);
})