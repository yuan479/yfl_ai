import React, { useState } from 'react'
import './style.css'

const PictureCard = () => {
    const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');
    const [word,setWord] = useState("")

    const updateImageData = (e) => {
        //html5的文件上传功能
        const file = e.target.files?.[0]// 可选链操作符?.操作会检查e.target.files 是否为空
        /* const file = e.target.files?e.target.files[0]:null */
        if(!file){
            return
        }
        console.log(file)
        //图片预览 I/O操作 异步操作
        return new Promise((resolve,reject)=>{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e)=>{
                //console.log(reader.result)
                //响应式业务
                setImgPreview(reader.result)
            }
        })
    }
    return (
        <div className="card">
            <input
                type="file"
                id="selectImage"
                accept='.jpg,.png,.jpeg,.gif'
                onChange={updateImageData}
            />
            <label 
            htmlFor="selectImage" /* 无障碍访问 */
            className="upload"
            >
                {/* 预览功能 属于用户体验功能  */}
                <img src={imgPreview} alt="preview" />
            </label>
            {/* template ->jsx -> {数据绑定} -> 响应式 ->单词业务 */}
            <div className="word">{word}</div>
        </div>
    )
}

export default PictureCard