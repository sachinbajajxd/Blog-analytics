const axios=require('axios');
const lodash=require('lodash');

module.exports.axiosMiddleware = async (req, res, next) => {
    try {
        const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
          headers: {
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
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
