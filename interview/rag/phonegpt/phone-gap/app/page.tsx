"use client"
//hooks
import { useChat } from '@ai-sdk/react'
import ChatOutput from '@/components/ChatOutput'
import ChatInput from '@/components/ChatInput'

export default function Home() {
  // chat llm 业务抽离
  const { input, messages, status, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">PhoneGPT</h1>
      <div className="space-y-4 mb-4 max-h-[80vh] overflow-y-auto">
        <ChatOutput messages={messages} status={status} />
      </div>
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}
