const express = require('express');
const {posts,middleware} = require('./app');
const PORT = 5000;
const server = express();
server.listen(PORT, () => {
  console.log('server working');
});
server.use((error, req, res,next)=>{
    res.status(500).send(error);
})

server.post('/forum/post12345',middleware.validate.validationSchema,posts.newPost);

