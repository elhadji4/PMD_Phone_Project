
class Telephone {
    constructor(marque, couleur, dimension, price, etat) {
        this.boite = true;
        this.etat = etat; 
        this.marque = marque;
        this.couleur = couleur;
        this.dimension = dimension;
        this.price = price;
    }

    fiche() {
        Object.entries(this).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    }
}

function main() {
    // Instanciation de deux objets telephone
    const tel1 = new Telephone('Apple', 'Noir', '6.1 pouces', 999, 'neuf');
    const tel2 = new Telephone('Samsung', 'Blanc', '6.2 pouces', 899, 'occasion');

    tel1.fiche();
    console.log('----------------------'); 
    tel2.fiche();
}


main();
