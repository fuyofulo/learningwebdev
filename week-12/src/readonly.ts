// readonly
type User3 = {
    readonly name: string;
    readonly age: number;
}


const user: Readonly<User3> = {
    name: "zaid",
    age: 20
}

// typescript wont allow this => user.name = 'zaid khan'
// use readonly in the type itself or when creating an instance of that type    