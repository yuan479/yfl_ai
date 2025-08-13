const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}

//console.log(JSON.parse(JSON.stringify(target)))
/* {
  field1: 1,
  field3: 'hxt',
  field4: { child: 'child', child2: { child2: 'child2' } }
} */

  //递归 +拷贝 
  //对数组支持不好

function clone(source) {
    if (typeof source === 'object') {
        let cloneTarget = {}//分配新空间
        for (const key in source) {
           // cloneTarget[key] = source[key]
           cloneTarget[key] = clone(source[key])
        }
        return cloneTarget
    } else {
        //return target
        return source
    }
}

let obj =clone(target)
obj.field4.child = 'child'
console.log(obj,target)

console.log(clone(target))
/* {
  field1: 1,
  field2: undefined,
  field3: 'hxt',
  field4: { child: 'child', child2: { child2: 'child2' } }
} */

  
  