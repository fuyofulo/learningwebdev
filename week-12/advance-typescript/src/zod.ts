import { z } from 'zod';
import express from 'express';

const app = express();

const userProfileSchema = z.object({
    name: z.string().min(1, { message: 'Name cannot be empty'}),
    email: z.string().min(1, { message: 'Email cannot be empty'}),
    age: z.number().min(18, { message: 'You must be at least 18 yrs old'}).optional()
});

type userProfileType = z.infer<typeof userProfileSchema>

app.put('/users', (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: userProfileType = req.body;

    if(!success) {
        res.status(411).json({ msg: 'User not updated'})
        return
    }

    res.json({
        msg: 'User updated'
    })
});

app.listen(3000);