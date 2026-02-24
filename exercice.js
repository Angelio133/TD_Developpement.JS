// TP 2 – JavaScript moderne (ES6+)

// Exercice 1 – Déclaration et manipulation des objets

// Tableau des étudiants
const etudiants = [
  { id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12 },
  { id: 2, nom: "Rabe", filiere: "IG", moyenne: 9 },
  { id: 3, nom: "Rasoa", filiere: "RT", moyenne: 14 },
  { id: 4, nom: "Raja", filiere: "GB", moyenne: 11 }
];

// 1. Afficher le nom de tous les étudiants
console.log("Liste des noms :");
etudiants.forEach(e => console.log(e.nom));

// 2. Utiliser la destructuration pour extraire nom et moyenne
console.log("\nDestructuration (nom et moyenne) :");
etudiants.forEach(({ nom, moyenne }) => {
  console.log(`${nom} : ${moyenne}`);
});

// Exercice 2 – Manipulation des tableaux

// 1. Étudiants admis (moyenne ≥ 10)
const admis = etudiants.filter(e => e.moyenne >= 10);
console.log("\nÉtudiants admis :");
console.log(admis);

// 2. Nouveau tableau contenant uniquement les noms
const noms = etudiants.map(e => e.nom);
console.log("\nTableau des noms :");
console.log(noms);

// 3. Ajouter 1 point à toutes les moyennes (sans modifier l'original)
const moyennesMajorees = etudiants.map(e => ({
  ...e, // copie de l'objet
  moyenne: e.moyenne + 1
}));

console.log("\nMoyennes après ajout de 1 point :");
console.log(moyennesMajorees);

console.log("\nTableau original inchangé :");
console.log(etudiants);

// Exercice 3 – Fonctions fléchées et template literals

// 1. Fonction fléchée afficherEtudiant
const afficherEtudiant = (etudiant) => {
  const { nom, filiere, moyenne } = etudiant;
  console.log(`L’étudiant ${nom} de la filière ${filiere} a une moyenne de ${moyenne}`);
};

console.log("\nAffichage formaté :");
etudiants.forEach(afficherEtudiant);


// Exercice 4 – Programmation asynchrone (async / await)

// Simulation d’un appel API
function chargerEtudiants() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(etudiants);
    }, 2000);
  });
}

// 1. Fonction async
async function afficherEtudiantsAsync() {
  try {
    console.log("\nChargement des étudiants...");
    
    // 2. await pour récupérer les données
    const data = await chargerEtudiants();
    
    // 3. Affichage après chargement
    console.log("Étudiants chargés :");
    console.log(data);
    
  } catch (error) {
    // 4. Gestion des erreurs
    console.error("Erreur lors du chargement :", error);
  }
}

// Appel de la fonction async
afficherEtudiantsAsync();


// Exercice 5 – Calcul de la moyenne générale

const moyenneGenerale = etudiants.reduce((acc, e) => acc + e.moyenne, 0) / etudiants.length;

console.log("\nMoyenne générale de la classe :", moyenneGenerale);