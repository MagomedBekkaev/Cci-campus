const postRepository = require("../repositories/post.repository");

const fetchPost = () => {
     const postRecuDeLaBDD =  postRepository.getPosts();

     // on traite les données

     return postRecuDeLaBDD
}

const fetchPostById = (id) => {
    const post = postRepository.findPostById(id)

    if(!post){
        return {
            status: "error",
            error : {
                code: 404,
                message: "L'article n'existe pas",
            }
        }
    }

    return {
        status : "success",
        data: post
    };
}

module.exports = {fetchPost, fetchPostById}