//4.1 Découverte

const [a, b, ...rest] = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(rest[0])

const {first, last, ...reste} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first);
console.log(last);
console.log(reste.age);

//4.2 Application

const perturbations = Object.values(data);

console.log(perturbations);

perturbations.forEach((perturbation) => {
    const texte = perturbation.texte;
    const dateDebut = perturbation.dateDebut;
    const dateFin = perturbation.dateFin;

    console.log("Texte :", texte);
    console.log("Date début :", dateDebut);
    console.log("Date fin :", dateFin);
});

let perturb = {
    "texte": "C1 : Accident de tram"
}

function ajouterPerturbation(perturbation, objet) {
    objet.perturbation = perturbation;
}

ajouterPerturbation(perturb, data);

console.log(data);