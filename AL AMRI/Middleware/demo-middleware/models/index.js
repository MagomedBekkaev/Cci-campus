const User = require("./User")
const Post = require("./Post")
const Comment = require("./Comment")
const Category = require("./Category")

User.hasMany(Post,{foreignKey: 'userId'})
Post.belongsTo(User, {foreignKey: 'userId'})


User.hasMany(Comment, {foreignKey: 'userId'})
Comment.belongsTo(User, {foreignKey: 'userId'})

Post.hasMany(Comment, {foreignKey: 'postId'})
Comment.belongsTo(Post, {foreignKey: 'postId'})

Post.belongsToMany(Category, {
    through: "articleCategory",
    foreignKey: "postId",
    otherKey: "categoryId"
})
Category.belongsToMany(Post, {
    through: "articleCategory",
    foreignKey: "categoryId",
    otherKey: "postId"
})


module.exports = {User, Post, Comment, Category}