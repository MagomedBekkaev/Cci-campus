const postService = require("../services/post.service");

const fetchPosts = (request, response) => {

    const posts = postService.fetchPost();

    response.status(200).json(posts)
}

const fetchPostById = (request, response) => {

    try {
        
        const id = request.params.id;
        const result = postService.fetchPostById(id)

        if(result.status == "error"){
            throw result
        }

        response.status(200).json(result)
        
    } catch (error) {

        response.status(error.error.code).json(error)
    }
}

module.exports = {fetchPosts, fetchPostById}
