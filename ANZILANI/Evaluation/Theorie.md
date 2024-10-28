## Question 1. 

En PHP une variable est déclaré avec un $, le nom de variable derrière et la valeur de cette variable. Par exemple: $nombre = 20. Il existe plusieurs règles et convention de nommage comme Camel Case, Upper Camel, etc. Généralement il faut commencer le nom de la variable en minuscule, et le deuxième mot de la variable par un majuscule.

## Question 2.

Un tableau associatif est un tableau qui peut stocker l'information dans un sort de variables, des clés. Par exemple:

$voiture = (

marque = "Porche"

modele = "911"

année = 1991

)

On utilise une boucle forEach dans des cas où on a besoin de parcourir chaque élément d'un tableau pour ensuite donner des instruction. Par exemple, si j'ai besoin d'afficher chaque élément d'un tableau dans un echo apart.

## Question 3. 

On utilise la méthode POST pour l'envoi de formulaire en PHP pour éviter l'affichage de données entrée dans le formulaire dans la barre URL du navigateur. 

Quant-on clique sur le bouton valider dans le formulaire, les données sont envoyée dans la page définit dans la balise "action" dans le formulaire HTML. Le fichier d'action collecte ces données grâce à POST et suis les instruction dans le fichier.

## Question 4.  

Une session en PHP permet de stocker l'information d'utilisateur en utilisant un identifiant de session unique. Cela permet de conserver l'information d'utilisateur lorsqu'il navigue sur le site web en ouvrant différents pages.

## Question 5.

Un cookie est un petit fichier qui contient une information limité d'utilisateur, par exemple son nom. Cela permet d'enregistrer cette information dans le navigateur pour pouvoir la pretélécharger  afin d'éviter de télécharger des données utilisateur à chaque ouverture du site web. On crée un cookie avec setcookie(). Il est impossible de supprimer un cookie mais on peut annuler la valeur de cet cookie ou désactiver le cookie en lui fixant une date d'expiration dans le passé.

