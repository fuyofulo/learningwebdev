import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
) {
    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
    console.log(response)
}


async function getTodos (user_id: number) {
    const response = await prisma.todo.findMany({
        where: {
            user_id: user_id
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    })
    console.log(response)
}

async function addTodo (user_id: number) {
    const response = await prisma.todo.create({
        data: {
            title: 'learn prisma',
            description: 'using typescript',
            user_id: user_id
        }
    })
    console.log(response)
}

//addTodo(1)

getTodos(1);

//insertUser('khan123', 'khanpassword', 'khan', 'zaid', 'khan@gmail.com')