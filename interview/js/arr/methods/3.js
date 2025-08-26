const people=[
    { name: '爱丽丝', age: 20 ,role:'admin'},
    { name: '莱茵', age: 30 ,role:'user'},
    { name: '艾米莉', age: 25 ,role:'user'},
]
const allAdults = people.every(person => person.age >= 18)
const hasAdmin = people.some(person => person.role === 'admin')
