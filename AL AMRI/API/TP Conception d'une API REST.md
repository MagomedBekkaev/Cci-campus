Ressource: User:

| Verbe  | Endpoint      | Requête body                                                 | Réponse attendu                                              | Code<br />Status      | Fonction              |
| ------ | ------------- | :----------------------------------------------------------- | ------------------------------------------------------------ | --------------------- | --------------------- |
| GET    | /api/users    | -                                                            | Tableau de users                                             | 200                   | Lister tous le users  |
| POST   | /api/users    | {<br />"nom" : string,<br />"email" : string<br />}          | {<br />"status" : string,<br />"message" : string<br />}     | 201<br />403          | Créer un nouveau user |
| DELETE | /api/users/id | -                                                            | {<br />"status" : string,<br />"message" : string<br />}     | 204<br />403          | Supprimer un user     |
| POST   | /api/signup   | {<br />"nom" : string,<br />"email" : string<br />"pwd" : string<br />} | {<br />"status" : string,<br />"message" : string<br />}     | 201<br />400          | Inscription d'un user |
| POST   | /api/login    | {<br />"email" : string<br />"pwd" : string<br />}           | {<br />"status" : string,<br />"message" : string<br />}     | 400<br />403<br />404 | Connexion d'un user   |
| GET    | /api/user/id  | -                                                            | {<br />"nom" : string,<br />"email" : string<br />"pwd" : string<br />} | 200<br />401<br />403 | Afficher le profil    |
| PUT    | /api/user/id  | {<br />"nom" : string,<br />"email" : string<br />"pwd" : string<br />} | {<br />"nom" : string,<br />"email" : string<br />"pwd" : string<br />} | 200<br />401<br />403 | Modifier un profil    |
|        |               |                                                              |                                                              |                       |                       |
|        |               |                                                              |                                                              |                       |                       |

Ressource: Project:

| Verbe  | Endpoint               | Requête body                                                 | Réponse attendu                                          | Code<br />Status               | Fonction                                               |
| ------ | ---------------------- | ------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------ | ------------------------------------------------------ |
| GET    | /api/tasks             | -                                                            | Tableau de tasks                                         | 200                            | Lister toute les tasks                                 |
| GET    | /api/tasks/id          | -                                                            | Une task                                                 | 200<br />401<br />403<br />404 | Afficher une task                                      |
| POST   | /api/tasks             | {<br />"title" : string,<br />"description" : string<br />"status" : string<br />"priority" : int<br />"due_date" : date<br />} | {<br />"status" : string,<br />"message" : string<br />} | 201<br />403                   | Créer une nouvelle task                                |
| DELETE | /api/tasks/id          | -                                                            | {<br />"status" : string,<br />"message" : string<br />} | 204<br />403                   | Supprimer une task                                     |
| PUT    | /api/tasks/id          | {<br />"title" : string,<br />"description" : string<br />"status" : string<br />"priority" : int<br />"due_date" : date<br />} | {<br />"status" : string,<br />"message" : string<br />} |                                | Modifier la task                                       |
|        |                        |                                                              |                                                          |                                |                                                        |
|        |                        |                                                              |                                                          |                                |                                                        |
| GET    | /api/tasks?status=Done | -                                                            | Tableau trié                                             | 200<br />401<br />403          | Afficher un tableau de taches<br /> avec status "Done" |
|        |                        |                                                              |                                                          |                                |                                                        |



Ressource: Task

| Verbe | Endpoint | Requête body | Réponse attendu | Code<br />Status | Fonction |
| ----- | -------- | ------------ | --------------- | ---------------- | -------- |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |

Ressource: Comment

| Verbe | Endpoint | Requête body | Réponse attendu | Code<br />Status | Fonction |
| ----- | -------- | ------------ | --------------- | ---------------- | -------- |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |
|       |          |              |                 |                  |          |

