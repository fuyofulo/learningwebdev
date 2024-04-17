const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.listen(3000);

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
    }
    
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({ 
        msg: "todo created"
    })
})

app.get('/my-todos', async (req, res) => {

    const response = await todo.find();
    console.log(response);
    res.json({
        response
    })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo updated"
    })
})