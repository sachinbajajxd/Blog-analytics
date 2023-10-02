const _ = require('lodash');

module.exports.blogStats = async function(req, res) {
    
    try {
        const blogData = req.blogData; 

        // console.log(blogData);
        const totalBlogs = blogData.blogs.length;
        const longestTitleBlog = _.maxBy(blogData.blogs, 'title.length');
        const privacyBlogs = blogData.blogs.filter(blog => blog.title.toLowerCase().includes('privacy'))
        const uniqueTitles = _.uniqBy(blogData.blogs, 'title');

        console.log(totalBlogs);

        return res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            totalBlogs,
            longestTitleBlog,
            privacyBlogsCount: privacyBlogs.length,
            uniqueTitles,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports.searchBlogs = async function(req, res) {
    try {
        // console.log(req.query);
        const query = req.query.query;

        if (typeof query !== 'string') {
            return res.status(400).json({ error: 'Invalid query' });
        }
        const blogs = req.blogData.blogs;
        const searchResults = blogs.filter((blog) => blog.title.toLowerCase().includes(query.toLowerCase()));

        console.log(searchResults);

        return res.status(200).json({
            success: true,
            message: "Search results fetched successfully",
            query,
            results: searchResults,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
