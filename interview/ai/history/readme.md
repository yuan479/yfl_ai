# LLM 历史

- AI chat 是无状态的，要让大模型更好的了解对话，手动管理 messages 数组
    将提问和回答都 push 进 messages

- 如果messages的无限增长，tokens开销太大
    - tokens 是有上限的
    - tokens 开销越来越大

- 找一个平衡点
    - 最近最少使用原则：维护一定轮数的对话，