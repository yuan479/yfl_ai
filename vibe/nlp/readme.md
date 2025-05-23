# 机器学习

- notebooklm
  你不知道的JavaScript 深入学习
  AI 播客 

  - modelscope
  阿里的开源大模型社区

- python notebook
ipynb 后缀
nlp 机器学习

-python 
nlp 第一语言
js 也挺好

- 引入了 pineline 模块
model 中国第一大模型社区
魔搭
from modelscope pipelines import pipeline
from modelscope.utils.constant import Tasks。

semantic_cls = pipeline(Tasks.text_classification,'damo/
nlp_structbert_sentiment-classification_chinese-base')
打分label 分类
情感分析实例，分为正面和反面，可用于评论区言论情绪区分

result = semantic_cls('好像爱这个世界啊')
print(result)

机器学习：机器帮你学习，
