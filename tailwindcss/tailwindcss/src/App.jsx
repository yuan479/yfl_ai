import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      {/* AI 语义 */}
      {/* <h1 className='text-3xl font-bold underline'>你好哇~ tailwindcss</h1> */}
      <div className="max-w-xs rounded-lg overflow-hidden bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105 mx-auto">
        <div className="relative">
          <img
            src="https://img2.baidu.com/it/u=3489155007,329094014&fm=253&app=138&f=JPEG?w=1361&h=800"
            alt=""
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-2 left-2 bg-red-300 text-white text-xs font-bold px-2 py-1 rounded">
            new
          </span>
          <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors">
            ❤️
            {/* 矢量图，数学形状画图，支持无限放大，不会模糊，区别于像素图 */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>


        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            Premium Wireless Headphones
            --------这是很长的一行----------------
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            桀桀桀桀桀桀桀桀桀桀桀桀桀桀桀
            哇呀呀呀呀呀呀呀呀呀呀呀呀呀~
          </p>
          <div className="flex items-center mt-2">
            <div className="flex">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="text-sm text-gray-500 ml-2">4.4(128 reviews)</div>
            <br />
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xl font-bold text-gray-900">$199.99</div>
              <div className="text-sm text-gray-500 line-through">$249.99</div>
            </div>
          </div>
        </div>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Add to Cart
        </button>

        <button className="mt-2 w-full text-blue-600 hover:text-blue-800 text-sm font-medium">
          Quick View
        </button>
      </div>

    </>
  )
}

export default App
