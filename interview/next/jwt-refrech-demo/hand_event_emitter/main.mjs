import {createWriteStream} from 'fs';
import { join } from 'path';
import { EventEmitter } from 'events';

const target = join(process.cwd(),'a.txt')
console.log(target)
const ws = createWriteStream(target)
//write ,fish error end 事件
console.log(ws instanceof EventEmitter)
//自定义事件 流程，模仿的就是EventEmitter