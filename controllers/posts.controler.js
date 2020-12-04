const posts = new Map();

module.exports.newPost = (req,res) => {
  const { body } = req;
  const newPost = {...body}
  posts.set(newPost);
};
