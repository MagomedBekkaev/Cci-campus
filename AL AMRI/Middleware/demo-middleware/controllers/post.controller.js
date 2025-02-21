const postService = require("../services/post.service")

const fetchAllPosts = async (request, response) => {
    const posts = await postService.getPosts();
    response.status(200).json(posts)
}

const fetchPost = async (request, response) => {
    const {id} = request.params;
    const post = await postService.getPostById(id);

    response.status(200).json(post)
}

const createPost = async (request, response) => {
    const data = request.body;
    const urlImage = `${request.file.destination}/${request.file.filename}`;
    console.log(request.body);
    console.log(request.file);
    const userId = 1
    const result = await postService.savePost({...data, userId, image: urlImage})
    response.status(200).json(result)
    
}

module.exports = {fetchAllPosts, fetchPost, createPost}