interface User2 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdatedProps2 = Pick<User2, 'name' | 'age'| 'email' >

type UpdatePropsOptional = Partial<UpdatedProps2>

function updateuser2 (UpdatedProps: UpdatePropsOptional) {
    // hit the database to update
}

console.log('learning pick')