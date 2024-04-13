const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://fuyofulo:sEHFqEhUkloaLjsq@cluster0.qir16f2.mongodb.net/practice')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }]
})

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const CourseSchema = new mongoose.Schema ({
    title: String,
    description: String,
    imageLink: String,
    price: Number
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}