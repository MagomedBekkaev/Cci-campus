<?php

class Personnage {
    private $nom;
    private $sante;
    private $force;
    private $defense;
    private $type;

    public function __construct($nom, $sante, $force, $defense, $type) {
        $this->nom = $nom;
        $this->sante = $sante;
        $this->force = $force;
        $this->defense = $defense;
        $this->type = $type;
    }

    public function getNom() {
        return $this->nom;
    }

    public function getSante() {
        return $this->sante;
    }

    public function getForce() {
        return $this->force;
    }

    public function getDefense() {
        return $this->defense;
    }

    public function getType() {
        return $this->type;
    }

    public function setNom($nom) {
        $this->nom = $nom;
    }

    public function setSante($sante) {
        if ($sante >= 0 && $sante <= 100) {
            $this->sante = $sante;
        }
    }

    public function setForce($force) {
        if ($force >= 10 && $force <= 100) {
            $this->force = $force;
        }
    }

    public function setDefense($defense) {
        if ($defense >= 0 && $defense <= 100) {
            $this->defense = $defense;
        }
    }

    public function setType($type) {
        $this->type = $type;
    }

    public function attaquer($adversaire) {
        $degats = $this->force - $adversaire->getDefense();
        if ($degats > 0) {
            $adversaire->setSante($adversaire->getSante() - $degats);
        }
        if ($adversaire->getSante() <= 0) {
            echo $adversaire->getNom() . " est mort.";
        }
    }
}

// Création des personnages
$guerrier = new Personnage("Guerrier", 100, 50, 30, "Humain");
$orc = new Personnage("Orc", 100, 40, 20, "Orc");

// Simulation de combat
while ($guerrier->getSante() > 0 && $orc->getSante() > 0) {
    echo "Avant l'attaque:\n";
    echo $guerrier->getNom() . " Santé: " . $guerrier->getSante() . "\n";
    echo $orc->getNom() . " Santé: " . $orc->getSante() . "\n";

    $guerrier->attaquer($orc);

    echo "Après l'attaque:\n";
    echo $guerrier->getNom() . " Santé: " . $guerrier->getSante() . "\n";
    echo $orc->getNom() . " Santé: " . $orc->getSante() . "\n";
    echo "-------------------------\n";

    if ($orc->getSante() <= 0) {
        echo $orc->getNom() . " est mort.\n";
        break;
    }

    // L'orc attaque le guerrier en retour
    $orc->attaquer($guerrier);

    echo "Après la contre-attaque:\n";
    echo $guerrier->getNom() . " Santé: " . $guerrier->getSante() . "\n";
    echo $orc->getNom() . " Santé: " . $orc->getSante() . "\n";
    echo "-------------------------\n";

    if ($guerrier->getSante() <= 0) {
        echo $guerrier->getNom() . " est mort.\n";
        break;
    }
}
?>
