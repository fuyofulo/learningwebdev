const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin, Course } = require("../db");
const router = Router();

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const response = await Admin.create({
        username: username,
        password: password
    })
    if(response) {
        res.json({
            msg: "Admin created successfully"
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    
    const courses = await Course.find({});
    
    res.json({
        courses: courses
    })
}) 

router.post('/courses', adminMiddleware, async (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    if(response) {
        res.json({
            msg: "Course created successfully", courseId: newCourse._id
        })
    }
})
