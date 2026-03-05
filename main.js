let main_name=`Geuss The Word`;
document.querySelector("footer").innerHTML=`${main_name} Gmae Created By Elmallah`
let foot=document.querySelector("footer");
let mass=document.querySelector(".mass")
let wordtoguess="";
const words = [
    "Apple", "Beach", "Brain", "Bread", "Brush",
    "Chair", "Chest", "Chord", "Click", "Clock",
    "Cloud", "Dance", "Diary", "Drink", "Earth",
    "Feast", "Field", "Fruit", "Glass", "Grape",
    "Green", "Group", "Heart", "Horse", "House",
    "Juice", "Light", "Lemon", "Melon", "Money",
    "Music", "Night", "Ocean", "Party", "Piano",
    "Pilot", "Plane", "Phone", "Pizza", "Plant",
    "Radio", "River", "Robot", "Shirt", "Shoes",
    "Smile", "Snake", "Space", "Spoon", "Storm"
];

wordtoguess=words[Math.floor(Math.random() * words.length)].toLocaleUpperCase();
console.log(wordtoguess)
let numOfletters=5;
let numOfinputs=5;
let start=1;



// hints
let numOfhints=2;
let hintbtn=document.querySelector(".hint");
hintbtn.addEventListener("click",hintfun);
document.querySelector(`.hint span`).innerHTML=numOfhints;
function hintfun(){
    if(numOfhints > 0){
        numOfhints--;
        document.querySelector(`.hint span`).innerHTML=numOfhints;

    }
     if(numOfhints===0){
        hintbtn.classList.add("not");
    }
   
const avinputs = document.querySelectorAll("input:not(.not)");
    let emptyinputs = Array.from(avinputs).filter((input) => input.value==="");
    if(emptyinputs.length > 0){

        const radomletter= Math.floor(Math.random() *emptyinputs.length);
        const randominput= emptyinputs[radomletter];
        console.log(randominput)
        const indextofill=Array.from(avinputs).indexOf(randominput);
        if(indextofill!==-1){
            randominput.value=wordtoguess[indextofill];


        }
        


    }


}




// game
function ginputs(){
    const inputscon = document.querySelector(".inputs")
    for(let i=1;i<=numOfinputs;i++){
        
        let inp=document.createElement("div");
        inp.id = `Try-${i}`; 
        inp.classList.add(`Try-${i}-litter-${i}`);
        
        inp.innerHTML= `<span>Try-${i}</span>`;
        inputscon.appendChild(inp)
        for (let j=1;j<=numOfinputs;j++){
            const input=  document.createElement("input")
            input.id=`Try-${i}-litter-${j}`;
            if (i!==1) {input.classList.add("not")}
    input.type="text";
    input.setAttribute("maxlength", "1");
    
    inp.appendChild(input)


    
    
    

    
    
    
    
}


}
inputscon.children[0].children[1].focus();

    const inputsdis=document.querySelectorAll(".not");
    inputsdis.forEach((input) => (input.disabled =true));

    const inputs=document.querySelectorAll("input");
    inputs.forEach((input,index)=>{
        input.addEventListener("input",function(){
            this.value=this.value.toUpperCase();
            const next=inputs[index+1];
            if (next) next.focus();

        })



    }) 

    const check= document.querySelector(".check");
  
    check.addEventListener("click",handleWord);
    
    function handleWord(){
        let sucsses=true;

        for(let i=1;i<=numOfletters;i++){


            const fild=document.querySelector(`#Try-${start}-litter-${i}`);
            let letter=fild.value.toLocaleUpperCase();
            let truelitter=wordtoguess[i-1];
            if(letter===""){
                fild.classList.add("wrong");
                sucsses=false;
               



            }

            if(letter===truelitter && letter!=""){
                fild.classList.add("in-place");



            }
            else if(letter!==truelitter && letter!=""){

                if(wordtoguess.includes(letter) && letter !=""){
                    fild.classList.add("not-place")
                    sucsses=false
                    
                }
                
                else if(!wordtoguess.includes(letter)&& letter!=""){
                    
                    fild.classList.add("wrong");
                    sucsses=false;



                }
                else{
                    sucsses=false;



                }

            }
            

        }
        if(sucsses){
            mass.innerHTML=`You win your word is <span>${wordtoguess}</span>`;
            let all = document.querySelectorAll("input");
            all.forEach((trydiv)=>trydiv.classList.add("not"));



        }
        else{
            let wronginpts=document.querySelectorAll(`#Try-${start} input`)
            wronginpts.forEach((input)=>(input.classList.add("not")));
            
            start++;
            let nexttry=document.querySelectorAll(`#Try-${start} input`);
            nexttry.forEach((input)=>(input.disabled = false))
            let el = document.querySelector(`#Try-${start}`);
            if(el){
                nexttry.forEach((input)=>(input.classList.remove("not")));
                el.children[1].focus();
                
                
                
            }
            
            else{

                mass.innerHTML=`You Lose your word is <span>${wordtoguess}</span>`

            }

        }




    
    
    
    
    
    }
        


    





}

window.onload =function(){
    ginputs();

};


