 // Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
  return sleep(300).then(() => {console.log('message 1');});
}

function second() {
  return sleep(100).then(() => {console.log('message 2');});
}

function third() {
  return sleep(200).then(() => {console.log('message 3');});
}

function secondWithError() {
  return sleep(100).then(() => {throw new Error("catch me if you can");})
}

// first();
// second();
// third();

 // function faireQqc() {
 //  return new Promise(resolve => setTimeout(resolve, 100));
 // }

 // faireQqc()
 //     .then((result) => first(result))
 //     .then((newResult) => second(newResult))
 //     .then((newResult) => third(newResult))
 //     .then((finalResult) => {
 //       console.log("Résultat final : " + finalResult);
 //     })

first().then(() => secondWithError()).then(() => third());

first().then(() => secondWithError()).catch(error => {
  console.error(error.message);
}).then(() => third());

//6.2

 async function getHumans() {
     const url = "https://swapi.info/api/species";
     try {
         const reponse = await fetch(url);

         if (!reponse.ok) {
             throw new Error(`Statut de réponse : ${reponse.status}`);
         }

         const resultat = await reponse.json();

         const premierElement = resultat[0];

         console.log(premierElement);

         return premierElement;

     } catch (erreur) {
         console.error(erreur.message);
     }
 }

 async function getFirstHuman() {
     try {
         const species = await getHumans();

         const firstPersonUrl = species.people[0];

         const response = await fetch(firstPersonUrl);

         if (!response.ok) {
             throw new Error(`Statut : ${response.status}`);
         }

         const person = await response.json();

         console.log(person);

     } catch (error) {
         console.error(error.message);
     }
 }

 getFirstHuman();

 async function getCharactersFromSpecies(speciesId) {
     try {
         const response = await fetch(`https://swapi.info/api/species/${speciesId}`);
         const species = await response.json();

         const peopleUrls = species.people;

         const fetchPromises = peopleUrls.map(url => fetch(url));

         const responses = await Promise.all(fetchPromises);

         const jsonPromises = responses.map(res => res.json());
         const characters = await Promise.all(jsonPromises);

         characters.forEach(character => {
             console.log(character.name);
         });

     } catch (error) {
         console.error(error);
     }
 }

 getCharactersFromSpecies(1);

 //6.3

 function waitForUserChoice() {
     return new Promise((resolve, reject) => {

         const okBtn = document.getElementById("okBtn");
         const cancelBtn = document.getElementById("cancelBtn");

         okBtn.addEventListener("click", () => {
             resolve("Ok clicked");
         });

         cancelBtn.addEventListener("click", () => {
             reject("Cancel clicked");
         });

     });
 }

 waitForUserChoice()
     .then(message => {
         console.log(message);
     })
     .catch(message => {
         console.log(message);
     });