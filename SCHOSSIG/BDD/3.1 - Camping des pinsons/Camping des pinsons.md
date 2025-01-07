# Camping des pinsons



Le camping des pinsons souhaite informatiser la gestion de son fonctionnement.

Le camping est un terrain découpé en emplacements. Ceux-ci peuvent être de plusieurs types : vide, avec mobile home ou pour une caravane. Chaque emplacement est numéroté, peut disposer d’une place de parking ou non, peut être à l'ombre ou non, peut être raccordé à l'électricité ou non. Les différents emplacements sont regroupés dans des zones, chacune ayant son nom.

La valeur d'un emplacement est déterminée en nombre de points. Le prix d'un emplacement dépend donc de sa valeur et de la période de l’année. Par exemple, un emplacement peut avoir une valeur de 31 points, le point valant 15 € de mars à juin, 17 € en juillet et 18 € en août.

Le camping propose des activités gratuites ou payantes, chacune avec son nom et un type, comme cinéma, restaurant, piscine, court de tennis, terrains de pétanque, de volley… Chacune de ces activités est située dans une zone précise du camping, une zone pouvant regrouper plusieurs activités.

Lorsqu’un client veut réserver pour un séjour, il doit sélectionner toutes les caractéristiques du ou des emplacements choisis et spécifier les dates de début et de fin de réservation pour les emplacements. Par défaut les mêmes dates de début et de fin seront utilisées pour tous les emplacements, mais le client peut choisir de préciser différentes dates pour chaque emplacement. Un client est défini par un identifiant, un nom, un prénom, une adresse, un numéro de téléphone, une adresse de courrier électronique.

Les réservations sont possibles par internet ou par téléphone, l'information d'origine de la réservation étant à conserver. Elles sont confirmées par le règlement d'un acompte correspondant à 20 % du prix  du séjour. Ce règlement peut être effecuté en ligne, par virement bancaire ou par l'envoi d'un chèque. Dans tous les cas, une fois la réservation effectuée, l'accompte doit être réglé dans les 15 jours suivant la date de réservation. Au-delà de ce délai, la réservation est annulée et l’emplacement libéré pour la période considérée. L'historique de toutes les réservations doit être conservé.

À l’arrivée d’un client au camping, il est procédé à un relevé du compteur électrique sur le ou les emplacements réservés. À son départ, le client règle le solde du séjour, comprenant le montant de l’électricité consommée, sur la base du relevé de compteur électrique du ou des emplacements, au départ du client. L'historique des règlements sera conservé pour chaque séjour.



## Modélisation statique
- Produire le modèle entités-associations ou le diagramme de classes pour représenter la base de données nécessaire pour la réalisation de l'application souhaitée.
- En déduire le modèle relationnel.



## Requêtes SQL
Rédiger les requêtes suivantes.
En cas de jointures, la syntaxe SQL 92 sera privilégiée.

**R1 :** *Quels sont les nom, prénom, code postal, ville des clients habitant les départements parisiens ?*

**R2 :** *Quels sont les nom et prénom des clients n’ayant pas d'adresse électronique ?*

**R3 :** *Quels sont les emplacements à l’ombre disposant de l’électricité ?*

**R4 :** *Quels sont les nom et prénom des clients ayant réservé un emplacement à l’ombre ?*

**R5 :** *Quels sont les nom et prénom des clients dont le séjour commence un mois de juillet ?*

**R6 :** *Quels sont les emplacements pouvant accueillir une tente ou une caravane,
          qu'ils aient été réservés ou non ?*

**R7 :** *Quels sont les emplacements situés à côté de la piscine ?*

**R8 :** *Quels sont les clients ayant quitté le camping au mois de juillet 2010 ?*

**R9 :** *Quelle est la quantité d'électricité consommée
           par réservation et par emplacement ?*

**R10 :** *Quelles sont les réservations n’ayant pas de règlement ?*

**R11 :** *Quels sont les emplacements ne se trouvant à côté d’aucune activité ?*

**R12 :** *Quel a été le montant total des règlements effectués avant le 1er juillet 2010 ?*

**R13 :** *Quel a été le montant total des règlements effectués par des clients
           pour des séjours terminés en 2010,
           mais partis au plus tard le 31 juillet 2010 ?*

**R14 :** *Quelle est la liste des clients qui sont partis ayant consommé de l'électricité,
           en précisant leur identité, les dates du séjour et la quantité totale consommée ?*

**R15 :** *Quel est par client, le montant total et le nombre des règlements, résultat classé par montant ?*

**R16 :** *Quels sont les emplacements qu'il est actuellement possible de réserver ?*
