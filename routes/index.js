const express=require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const middleware = require('../middleware/middleware');
const blogControllers=require('../controllers/blogControllers');

router.get('/', (req, res) => {
    console.log("Hello we are on home page");
    res.json({message: "Hello World"});
});

router.get('/api/blog-stats', middleware.axiosMiddleware, blogControllers.blogStats);
router.get('/api/blog-search', middleware.axiosMiddleware, blogControllers.searchBlogs);

router.get('/*', (req, res) => {
    res.status(400).json({success: false, message: "Route not found"});
});





module.exports = router;
