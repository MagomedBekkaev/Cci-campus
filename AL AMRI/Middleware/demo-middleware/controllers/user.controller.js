const userService = require("../services/user.service")

const fetchAllPosts = async (request, response) => {
    const users = await userService.getAllUsers();
    response.status(200).json(users)
}

const fetchUser = async (request, response) => {
    try {
        const userId = request.params.id
        const result = await userService.getUserById(userId)  
        console.log(result)
        if("status" in result){
            throw result
        }

        response.status(200).json(result)

    } catch (error) {
        response.status(error.status).json({message : error.message})
    }


    
}

module.exports = {fetchAllPosts, fetchUser}