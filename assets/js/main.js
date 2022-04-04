/* CONSEGNA
*************
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

const btn = document.getElementById ("play");

btn.addEventListener ("click", function GenerateGrid(selector){

    /* console.log("click") */

    let difficult = document.querySelector(".selection").value ;

    if (difficult == "Easy"){
        console.log(difficult)
        
        generateGrid(".cells", "div", "cell", 100);
        selectElements (".cell", "active")
        

    }

    else if (difficult == "Medium" ){
        generateGrid(".cells", "div", "cell", 81);
        selectElements (".cell", "active")
        

    }

    else if (difficult == "Hard") {
        generateGrid(".cells", "div", "cell", 49);
        selectElements (".cell", "active")

    
    }


}) 



function generateGrid (selector, tag_name, class_name, limit) {

    const cellsElement = document.querySelector(selector)
    cellsElement.innerHTML = " " ;
    
    for(let i = 1; i <= limit; i++) {

        let cell = document.createElement(tag_name);
       
        cell.classList.add(class_name);
        cellsElement.append(cell);

    }

}





function selectElements (selector, active_class){
    //creo una variabile in cui c'è una lista con tutte le mie celle

    const cells = document.querySelectorAll(selector);

    //creo un ciclo for il cui limite è la lunghezza della lista di celle, che mi permetterà di selezionare le singole celle della lista

    for (let i = 0; i < cells.length; i++) {
        const cellItem = cells[i];
        /* console.log(cellItem); */

        //creo uno span che assegni dei numeri all'interno delle celle che partano da 1 alla lunghezza della lista
        const  spanElement = document.createElement("span");
        spanElement.append(i + 1);
        cellItem.append(spanElement);
        
        //creo una funzione che mi permette di aggiungere al singolo oggetto un evento al click
        cellItem.addEventListener("click", function(){

            console.log(this, i);
            this.classList.toggle(active_class);
        })
    }



}







