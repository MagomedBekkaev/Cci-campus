const postRepository = require("../repositories/post.repository")

const getPostById = async (id) => {
    return await postRepository.findPostById(id)
}

const getPosts = async (id) => {
    return await postRepository.findPosts()
}

const savePost = async (data) => {
    return await postRepository.savePost(data)
}

module.exports = {getPostById, getPosts, savePost}