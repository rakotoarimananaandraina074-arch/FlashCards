/*console.log("JSbien");
const btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    console.log("Notre JS fonctionne très bien");
});
//alert("TESTTTT");*/
console.log("HELLO");
const cartes=[{
    question:"Qu'est-ce que HTML?", reponse:"HTML est un langage utilisé pour structurer le contenu d'une page web."},
    {
        question:"Qu'est-ce que CSS?",reponse:"CSS premet de mettre en forme et de styliser une page web."
    },
    {
        question:"Qu'est-ce que JavaScript ?", reponse:"JavaScript permet d'ajouter du comportement et de l'interactivité à une page web."
}];
let carteActu=0;
const question=document.getElementById("question");
const reponse=document.getElementById("reponse");
const numeroCarte=document.getElementById("numCarte");
const totalCartes=document.getElementById("totCarte");
function afficherCarte(){
    question.textContent=cartes[carteActu].question;
    reponse.textContent=cartes[carteActu].reponse;
    reponse.classList.remove("visible");
    numeroCarte.textContent=carteActu+1;
    totalCartes.textContent=cartes.length;
    precedente.disabled=carteActu===0;
    suivante.disabled=carteActu===cartes.length-1;
}
const precedente=document.getElementById("prev");
const suivante=document.getElementById("next");
suivante.addEventListener("click",function(){
    if(carteActu < cartes.length-1){
        carteActu=carteActu+1;
        afficherCarte();
    }
});
precedente.addEventListener("click",function(){
    if (carteActu > 0){
        carteActu=carteActu-1;
        afficherCarte();
    }
});
const voirR=document.getElementById("voirR");
voirR.addEventListener("click",function(){
    reponse.classList.toggle("visible");
});
