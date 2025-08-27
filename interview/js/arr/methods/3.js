const people=[
    { name: '路明非', age: 19 ,level:'S'},
    { name: '楚子航', age: 20 ,level:'A'},
    { name: '凯撒', age: 21 ,level:'A'},
]
const allAdults = people.every(person => person.age >= 20)
const isS = people.some(person => person.role === 'A')
