const postRepository = require('../repositories/post.repository');

const fetchPosts = () => {
    return postRepository.getPosts();
}

module.exports = {fetchPosts}