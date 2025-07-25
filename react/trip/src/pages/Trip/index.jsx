import useTitle from '@/hooks/useTitle'
import { chat, kimiChat } from '@/llm'
import { useEffect, useState } from 'react'
import styles from './trip.module.css'
import { Input, Button, Loading ,Toast} from 'react-vant'
import {ChatO,UserO} from '@react-vant/icons'


const Trip =  () => {
   /* useEffect(() => {
     const fetchChat = async () => { */
  /*  const res = await chat([
     {
       role: 'user',
       content: '重庆旅游景点'
     }
   ],
   '', 
   'sk-gqJKa7sIOrQpHzmwvbzqUW3467Jp7umbl4O16MIPPmVBKVdI', 
   'moonshot-v1-auto'); */
  /*  const res = await kimiChat([
     {
       role: 'user',
       content: '写一篇玄幻小说'
     }
   ]);

   console.log(res)
 }
 fetchChat()
}, []) */
  useTitle('旅游小助手')
  const [text, setText] = useState('')
  const [isSending, setIsSending] = useState(false)
  //数据驱动界面  先静态后动态
  const [messages,setMessages]=useState([
    {
      id:1,
      content:"helllo~~",
      role:'user'
    },
    {
      id:2,
      content:"helllo ,I'm your father",
      role:'assistant'
    }
  ])
  const handleChat = async () => {
    if (text.trim() === ""){
      Toast.info({
        message:'输入不能为空'
      })
      return  
    }
    setIsSending(true)
    setMessages([
      ...messages,
      {
        role:'user',
        content:text
      }
    ]
   
  )
  const newMessage = await chat([{
    role:'user',
    content:text
  }])
  setMessages([
    ...messages,
    newMessage.data
  ])
  setIsSending(false)
  }

  return (
    <div className='flex flex-col h-all'>
       {isSending && (<div className="flexd-loading"><Loading style={{marginLeft:'49%'}} type="ball" /></div>)}
      <div className={`flex-1 ${styles.chatArea}`}>
      
      {
        messages.map((msg,index)=>(
          <div 
          key={index}
          className={msg.role==='user'?styles.messageRight:styles.messageLeft}
          >
            {
              msg.role==='assitent'?<ChatO/>:<UserO/>
            }
            {msg.content}
          </div>
        ))
      }
      {}
      </div>
      <div className={`flex ${styles.inputArea}`}>
        <Input
          value={text}
          onChange={(e) => setText(e)}
          placeholder="请输入消息"
          className={`flex-1 ${styles.input}`}
        />
        <Button disabled={isSending} type='primary' onClick={handleChat}>发送</Button>
      
      </div>
      
    </div>
  )
}

export default Trip
