const {posts} = require("../data")

const getPosts = () => {
    // requete SQL
    return posts
}

const fetchPostById = (id) => {
    return posts.find((post) => article.id == id)
}

module.exports = {getPosts, findPostById}