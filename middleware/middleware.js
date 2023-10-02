const axios=require('axios');
const lodash=require('lodash');

module.exports.axiosMiddleware = async (req, res, next) => {
    try {
        const token=process.env.SECRET_TOKEN;

        const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
          headers: {
            'x-hasura-admin-secret': token
          },
        });
    
        req.blogData = response.data; 
        next(); 
    } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
    }
}
