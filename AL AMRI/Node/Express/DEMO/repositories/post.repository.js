const {posts} = require("../data");

//tableau.push(valeur)

const getPosts = () => {
    //requête SQL
    return posts;
}

const findPostById = (id) => {
    
    const post = posts.find((article => article.id == id))

    return post;
}

module.exports = {getPosts, findPostById};