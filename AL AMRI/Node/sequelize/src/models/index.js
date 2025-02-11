require("../config/db");
const User = require("./user.model");
const Post = require("./post.model");
const Comment = require("./comment.model");
const Category = require("./category.model");
const ArticleCategory = require("./articleCategory.model");

// Utilisateur à Article : Un utilisateur peut avoir plusieurs articles.
User.hasMany(Post)

// Article à Utilisateur : Un article est créé par un utilisateur.
Post.belongsTo(User)

// Utilisateur à Commentaire : Un utilisateur peut créer plusieurs commentaires.
User.hasMany(Comment)

// Commentaire à Utilisateur : Un commentaire est créé par un utilisateur.
Comment.belongsTo(User)

// Article à Commentaire : Un article peut avoir plusieurs commentaires.
Post.hasMany(Comment)

// Commentaire à Article : Un commentaire est lié à un article.
Comment.belongsTo(Post)

// Article à Catégorie : Un article peut appartenir à plusieurs catégories.
Post.belongsToMany(Category, {through: ArticleCategory})

// Catégorie à Article : Plusieurs articles peuvent appartenir à une catégorie.
Category.belongsToMany(Post, {through: ArticleCategory})


module.exports = {User, Post, Comment, Category, ArticleCategory};