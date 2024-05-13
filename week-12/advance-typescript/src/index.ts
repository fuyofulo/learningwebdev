
interface User {
    name: string;
    age: number
}

function sumOfAge(user1: User, user2: User) {
    return user1.age+user2.age;
}

console.log(sumOfAge({name: 'zaid', age: 20}, {name: 'khan', age: 20}))