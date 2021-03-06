const alpha = document.querySelector("#alpha");
const beta = document.querySelector("#beta");
const gamma = document.querySelector("#gamma");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const result1 = document.querySelector("#printDiak");
const result2 = document.querySelector("#printRoots");


window.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        if(alpha.value == 0){
            alert("Το α δεν πρέπει να είναι μηδέν γιατί τότε μιλάμε για πρώτου βαθμού εξίσωση!");
            alpha.value = "";
        }
        a = alpha.value;
        b = beta.value;
        c = gamma.value;
    
        D = diakrinousa(a,b,c); 
        result1.textContent= "Η διακρίνουσα είναι Δ = "+ D;
        result1.style.visibility="visible";

        if(D>0){
            r1 = (-b+Math.sqrt(D))/(2*a);
            r2 = (-b-Math.sqrt(D))/(2*a);
            result2.textContent=`Οι ρίζες της εξίσωσης είναι το ${r1} και το ${r2}` ;
            result2.style.visibility="visible";
        }
        else if(D==0){
            r = -b/(2*a);
            result2.textContent=`Η διακρίνουσα είναι μηδέν και επομένως η εξίσωση έχει μία διπλή ρίζα η οποία είναι η ρ=${r}`;
            result2.style.visibility="visible";
        }
    
        else {
            result2.textContent="Η εξίσωση δεν έχει ρίζες αφού η διακρίνουσα είναι αρνητική";
            result2.style.visibility="visible";
        }
    }
})

function diakrinousa(a,b,c){
    return b**2 - 4*a*c;
}