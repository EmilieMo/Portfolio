/*
console.log('toto');

// ___________string____________________ =chaine de caractères donc du texte
        let myVar = 'ma variable';
        // on défini la variable = on met sa valeur
        myVar = 'ma variable changé'
        // on peut créer ou changer une variable en la réinitialiser
        const myVar2 = "ma variable 2";
        //  le const est une variable qui ne change pas
        // par ex: myVar2 = "ma variable 2 changée"; indiquera une rreur car on ne peut pas changer la const
console.log(myVar);
// affiche la variable changé qui a été réinitialiser


// ______________boolean__________________________ = vrai ou faux
        let isTrue = true;
        let isFalse = false;
console.log(isTrue);
//  si c'est vrai alors on va pourvoir faire quelque chose

// _____________chiffres et opérateurs_______________
        let chiffre1 = 4; // pas besoin de mettre les ' guillemets ' car c'est un chiffres sinon c'est considéré comme une chaine de caractère
        let chiffre2 = 3; 
console.log(chiffre1, chiffre2); // nous donne les 2 chiffres = 4 et 3
console.log(chiffre1 + chiffre2); // additionne 4 + 3 DONC 7
console.log(chiffre1 - chiffre2); // soustrait 4 + 3 DONC 1
console.log(chiffre1 / chiffre2); // divise 4 / 3 DONC 1.333333333333
console.log(chiffre1 * chiffre2); // multiplie 4 * 3 DONC 12

// _______template string, littéraux de gabarits et concaténation _________________
let test = 'test ' + myVar;
console.log(test); // concaténation de test et de myVar donc: test ma variable changé
let test2 = `test2 ${myVar}`; //(littéraux gabarits) les `` permettent d'englober sans mettre a chaque fois les plus  
console.log(test2);

// __________ les conditions if else .. ________
if (chiffre1 < chiffre2) {
        console.log('condition est valide');
}else if(chiffre1 <= 4){
        console.log('le chiffre 1 est inférieur ou égal a 4');
}
else{
        console.log('condition invalide');
}
//SI(if) le chiffre1 est inférieur au chiffre2 alors la condition est valide ce n'est pas le cas rien ne s'affiche SINON SI le chiffre 1 est inférieur ou égal a 4 alors 'le chiffre 1 est inférieur ou égal a 4' SINON(else) condition invalide  ---si il y a trop de conditions a faire voir le switch---

//______ Tableaux : array ________

let array = ['item1', 'item2', 'item3', 'item4',];
console.log(array); // affiche que nous avons 4 éléments dans un tableau: (4) ['item1', 'item2', 'item3', 'item4']
// 0: "item1"
// 1: "item2"
// 2: "item3"
// 3: "item4"
// length: 4 => le lenght affiche le nombre d'éléments
console.log(array.length); // on peux écrire ainsi pour avoir directemeny le nbre d'élément dans le tableau
console.log(array[0]);  // on peut aussi ciblé un élément (un array commence par 0)

// _____Objets_____
let obj = {
        title: 'Mon titre',
        description:'Ma description'
}
console.log(obj.title); // affiche Mon titre
console.log(obj.title, obj.description); // affiche Ma description


// _________ les boucles while, for, foreach _______
for (let i = 0; i < 5; i++) {
        console.log(i);  // affiche 0, 1, 2, 3, 4 boucle 5 fois (le 0 compte toujours)
}

array.forEach(item => {
        console.log(item);
});


// ___________Les fonctions______
function myFunction(item, item2) {
        console.log(item, item2);
}
myFunction('toto');
myFunction('tata', 6);

const calcul = (nb1, nb2) => {
        return nb1 + nb2;
        console.log(nb1 + nb2); // affiche le résultat de 4+5 donc 9
}
calcul(4, 5);

let result = calcul(4, 5); // on stock le return le résultat dans la variable
console.log(result); 

// ____________Interagir avec le DOM________méthode,propriété,événement_______

console.log(window); // affiche toutes les possibilités
console.log(document);  //pour pouvoir ciblé (les éléments natif) le DOM
console.log(document.body);  // cible directement les éléments du body (éléments natif)

                //selectors: cible les éléments natif ou les class
        let header = document.querySelector('.header'); // methode qu va peermettre de chercher un élément
        console.log(header);
        let grids = document.querySelectorAll('.grid')
        console.log(grids);
        grids.forEach(grid =>{
                console.log(grid.classList); // nous donne les différentes class grid
        }) 
                // si je fais par exemple grid.classList.add('titi); et que je fais console.log(grid); on voit que j'ai rajouté 'titi' a toutes les class grid

// ________EVENEMENTs LES PLUS COURANT__________
document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM entièrement chargé et analysé")
});

header.addEventListener('click', (e) => {
        console.log(e); // plus on click dans le header et s'affiche
});

header.addEventListener('mouseenter', (e) => {
        console.log('souris entre header'); // s'affiche quand la souris entre dans me header
});

// ______Insertrion DOM et navigation DOM
let div = document.createElement('div');
// pour créer une div au niveau du document par exemple en utilisant createElement
div.classList.add('top'); // j'ajoute une class a la div 'top'
div.innerHTML = '<span>Top zone</span>';  //permet d'integrer du HTML dans le div qu'on vient de créer
header.append(div);  // on injecte la div dans le header
fin de la théorie 
*/

                //  function du thème
/* Menu Mobile */
function menuMobil() {
        const btn = document.querySelector('.burger'); // ciblé le bouton 
        const header = document.querySelector('.header'); // ciblé le header
        const links = document.querySelectorAll('.navbar a'); // récup tout les liens de la navbar
        
        btn.addEventListener('click', () => {
                header.classList.toggle('show-nav'); //le toggle permet d'ouvrir et fermer (alterner entre 2 actions)
        });
        links.forEach(link => {  
                link.addEventListener('click', () => {
                        header.classList.remove('show-nav'); //permet d'aller a chaque liste et fermer le menu
                });     
        })
}
menuMobil();  // on appelle la fonction

/* Portfolio */
function tabsFilters() {
        const tabs = document.querySelectorAll('.portfolio-filters a');
        const projets = document.querySelectorAll('.portfolio .card');

        const resetActiveLinks = () => {
                tabs.forEach(elem => {
                        elem.classList.remove('active');
                });
        }

        const showProjets = (elem) => {
                console.log(elem);
                projets.forEach(projet => {
                        let filter = projet.getAttribute('data-category');

                        if (elem === 'all') {
                                projet.parentNode.classList.remove('hide');
                                return
                        }
// ne sera pas pris en compte avec le return

                /*if(filter !== elem){
                        projet.parentNode.classList.add('hide');
                }else{
                        projet.parentNode.classList.remove('hide');
                }*/
                        // console.log(projet);
//option opérateur ternaire : pour faire la condition sans le if et le else du dessus => pour une syntaxe plus courte et plus propre 
        filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

                })
        }
        tabs.forEach(elem => {
                elem.addEventListener('click', (event) => {
                        event.preventDefault();
                        let filter = elem.getAttribute('data-filter');
                        // console.log(filter);
                        showProjets(filter)
                        resetActiveLinks();
                        elem.classList.add('active'); // change la couleur au click
                });
        })
}
tabsFilters();

function showProjetDetails() {
        const links = document.querySelectorAll('.card__link');
        const modals = document.querySelectorAll('.modal');

        links.forEach(elem => {
                elem.addEventListener('click', (event) => {
                        event.preventDefault();
                        document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
                });
        });
}
showProjetDetails();