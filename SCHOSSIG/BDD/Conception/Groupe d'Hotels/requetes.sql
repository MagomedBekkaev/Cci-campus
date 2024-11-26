-- R1 : Quelle est la liste des hôtels situés en Alsace, en précisant leur nom, adresse complète et nombre d'étoiles, liste triée par nombre d'étoiles décroissant ?

SELECT

-- R2 : Quelle est la liste des hôtels avec pour chacun son nombre de chambres ?

SELECT nomHotel, COUNT(idChambre)
FROM Hotels
    JOIN Chambres
        ON Chambres.idHotel = Hotels.idHotel
GROUP BY Hotels.idHotel

-- R3 :nQuelles chambres et dans quels hotels TOTO a-t-il réservé au premier trimestre de 2023 ?



-- R4 : Combien de chambres ont été réservées en 2023, quel que soit l'hôtel ?

SELECT idChambre, COUNT(idReservation)
FROM regroupe
    INNER JOIN Chambres
            ON reservation

-- R5 : Quels sont les noms et adresses des hôtels qui disposent de plus de 30 chambres ?