interface User1 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdatedProps = Pick<User1, 'name' | 'age'| 'email' >

function updateuser (UpdatedProps: UpdatedProps) {
    // hit the database to update
}

console.log('learning pick')