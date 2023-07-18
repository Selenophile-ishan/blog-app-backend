const express = require('express')
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController } = require('../controllers/blogControllers')

//router object
const router = express.Router()

//routes
//GET|| all blogs
router.get('/all-blog', getAllBlogsController)

//POST || create blog
router.post('/create-blog', createBlogController)

//PUT|| update blog
router.put('/update-blog/:id', updateBlogController)

//GET|| Single blog detail
router.get('/get-blog/:id', getBlogByIdController)

//Delete|| delete blod
router.delete('/delete-blog/:id', deleteBlogController)


//Get ||USER BLOG
router.get('/user-blog/:id',userBlogController)

module.exports = router