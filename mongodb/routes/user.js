const { Router } = require("express");
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../db");
const router = Router();
 
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const response = await User.create({
        username: username,
        password: password
    })
    if(response) {
        res.json({
            msg: "User created successfully"
        })
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    
    const courses = await Course.find({});
    
    res.json({
        courses: courses
    })
})

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
   
    const courseId = req.params.courseId;
    const username = req.headers.username;

    const response = await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    if(response) {
        res.json({
            msg: "Course purchased successfully"
        })
    }
})

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    })

    const response = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: response
    })
})
