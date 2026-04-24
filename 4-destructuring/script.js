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

// console.log(perturbations);

function afficherPerturbations() {
    perturbations.forEach((perturbation) => {
        const texte = perturbation.texte;
        const dateDebut = perturbation.dateDebut;
        const dateFin = perturbation.dateFin;

        console.log("Texte :", texte);
        console.log("Date début :", dateDebut);
        console.log("Date fin :", dateFin);
    });
}

afficherPerturbations()

//4.3

function ajouterPerturbation({dateDebut, dateFin, texte, plan, type ='restriction_ltc', heureDebut='00:00:00', heureFin='00:00:00',
                             latitude=-1, longitude=-1,weekEnd='2', listeLigneArret="SEM_B", visibleTC=true,
                             visibleVoiture=false}){
    data['SEM_'+Date.now()]= {
        dateDebut:dateDebut,
        type: type,
        dateFin:dateFin,
        texte:texte,
        plan:plan,
        heureDebut:heureDebut,
        heureFin:heureFin,
        latitude:latitude,
        longitude:longitude,
        weekEnd:weekEnd,
        listeLigneArret:listeLigneArret,
        visibleTC:visibleTC,
        visibleVoiture:visibleVoiture,
    }
}
ajouterPerturbation({dateDebut:"23/04/2026 16:00", dateFin:"23/04/2026 10:00", texte:"Nouvelle perturbation signalée", plan:"blabla"})

afficherPerturbations()

// console.log(data)

//4.4

function tryRest(...params){
    console.log(params);
}

tryRest(1, 2, 3, "clem")