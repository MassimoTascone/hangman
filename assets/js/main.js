/* Javascript for hangman */

const words = ["meeting" ,"holistic", "swim" , "toe" , "blood", "leg", "flap", "press" , "wardruna", "chang", "match", "ban" , "jellyfish", "historical", "julien", "mattis", "bitter", "becode", "potato"];
let answerArray = [];
let word;
let compteur = 0;

const checkLetter = (id) =>{ // fonction qui compare mon la valeur de mes boutons avec le mot random
    console.log(id);
    let isletter = false;
    if(id == "playAgain"){
        Random();
        document.getElementById("letters").style.display = "block";
        document.getElementById("compt").innerText = compteur;


        return
    }

    for (let i = 0; i < words.length; i++ ){
        if (word[i] == id){
            isletter = true;
            console.log("true");
            answerArray[i]=id;

        }
        
    }

    if (isletter){ // si la lettre est dans le mot random alors il réécrit answerArray avec les lettres trouvées
        document.getElementById("word").innerText =(answerArray.join(" "));
    }
    else {
        compteur++;
        document.getElementById("compt").innerText = compteur;
        console.log("faux");
            document.getElementById("hangimg").setAttribute("src","assets/img/hang"+compteur+".png");
    }

    if (compteur == 6){
        console.log("game over");
        document.getElementById("letters").style.display = "none";
        document.getElementById("msg").innerText = ("Game Over");
    }
}


const Random =() => { // Fonction qui genere mot random
    word = words[Math.floor(Math.random() * words.length)];
    compteur = 0;
    document.getElementById("hangimg").setAttribute("src","assets/img/hang"+compteur+".png");


    for (let i = 0; i < word.length; i++){ // Créé array avec les "-" a la place des lettres
        answerArray[i]= "_";

    }
    console.log(word);
    document.getElementById("word").innerText =(answerArray.join(" ")); // join inverse de split pour supprr les virgules

}

(() => { // des que la page s'actualise il call la function Random
    Random();

    
    Array.from(document.querySelectorAll("button")).forEach(btn =>
        btn.addEventListener(
            "click",
            () => (checkLetter(btn.id), false),
        ),
    );






})();