

let id = Symbol('id');
let firstPart = 'likes';
let userInfo = {
    name: 'Alex',        // identificaator 
    age: 27,            // in case of adding another key
    // [firstPart]: true,
    // 0: 12,
    // [id]: 'meaning'  ,   // symbols don't appear in loops.   system symbols
    // address: {
    //     city: 'Busan',
    //     street: 'Heundae',
    // }
};

userInfo.hobby = 'hiking';
console.log(userInfo)

delete userInfo.age;
// console.log(userInfo)

userInfo.hobby = 'running'
console.log(userInfo)

// let usera = userInfo;
// console.log(usera)
// usera.hobby = 'you'

console.log(userInfo)
// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo['name']);  
// console.log(userInfo['likes']);
// console.log(userInfo[firstPart]);
// console.log(userInfo[0])
// console.log(userInfo['0'])
// console.log(userInfo.address);
// console.log(userInfo.address.city);

function make(name, age) {
    return {
        name,
        age,
        'js': true
    };
}
let user = make('Alex, 28')
// console.log(user)

let usera = Object.assign({}, userInfo);
usera.age = 22;



console.log(userInfo)
console.log(usera)


// [] advantages.       can access the values of objects
let key = 'name';
console.log(userInfo[key]);     // Alex
// console.log(userInfo.key);     // undefined



// can use any word in objects(reserved words)

