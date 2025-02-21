const Post = require("../models/Post")

const findPostById = async (id) => {
    return await Post.findByPk(id)
}

const findPosts = async (id) => {
    return await Post.findAll()
}

const savePost = async (data) => {
    return await Post.create(data)
}

module.exports = {findPostById, findPosts, savePost}