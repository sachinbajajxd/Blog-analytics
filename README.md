# Blog-analytics

It is a Node.js application that provides analytics about blogs, such as the total number of blogs, unique blogs, blogs with privacy-related keywords, and more. It also offers a blog search functionality. This README provides an overview of the API endpoints and the technology stack used in this project.

## Technology Stack

- Node.js
- Express.js
- Lodash
- Axios

## About

This backend application is built using Node.js and Express.js. It leverages Axios to make API calls in the middleware and Lodash for analytics. The main purpose of this API is to fetch and analyze blog data to provide valuable statistics and a search functionality.

## Blog API Documentation

1. Get Blog Stats
   
    Endpoint: /api/blog-stats

    Method: GET

    Curl: curl -X GET https://blog-analytics-azsa.onrender.com/api/blog-stats

    ![Stats](/stats.png)

2. Blog Search

    Endpoint: /api/blog-search

    Method: GET
  
    Curl: curl -X GET https://blog-analytics-azsa.onrender.com/api/blog-search?query=value

    ![Search](/search.png)




Developed by Sachin Bajaj

For any inquiries, please contact sachinbajajxdd@gmail.com.
