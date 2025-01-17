const postService = require('../services/post.service')

const fetchPosts = (request, response) => {
    const posts = postService.fetchPosts()

    response.status(200).json(posts)
}

const fetchPostById = (request, response) => {
    const id = request.params.id
    const post = postService.fetchPostById(id)

    if(!post) {
        response.status(404).json({message: "Post not found"})
    }

    response.status(200).json(post)
}

module.exports = {fetchPosts}