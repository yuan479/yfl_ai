- 何为fetch？
  - fetch 是 JavaScript 里用于发起网络请求的现代 API，返回一个 Promise 对象以处理请求的响应。
- 何为Promise？
  

- xhr.readyState

0 (UNSENT)：

请求尚未初始化。此时，open() 方法还未被调用。
1 (OPENED)：

已经建立了一个与服务器的连接，但 send() 方法还未被调用。这意味着 open() 方法已经被成功调用。
2 (HEADERS_RECEIVED)：

已经接收到服务器的响应头信息。这时，send() 方法已经被调用，并且响应头已经准备好供访问。
3 (LOADING)：

正在接收服务器的响应体（response body）。这意味着响应数据正在下载中，但尚未完成。
4 (DONE)：

请求完成，意味着整个响应已经被接收完毕。这并不一定意味着请求成功；它也可能因为错误而完成。