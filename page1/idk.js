//sets standard color
let currentColor = 'black';

function mouseOver(id){
    let element = document.getElementById(id);
    
    element.style.backgroundColor = currentColor;
}

function mouseOverRemove(id){
    let element = document.getElementById(id);

    element.style.backgroundColor = 'white';
}

function populate(){
    let rowCount = 100; 
    let cellCount = 200;
    
    let mainTable = document.getElementById("mainTable");
    
    //loop all rows
    for(let i=0;i<rowCount;i++){
        let trElement = document.createElement("tr");
        mainTable.appendChild(trElement);
        
        //loop cells
        for(let j=0;j<cellCount;j++){
            let id = "td"+i+j;
            let tdElement = document.createElement("td");
            tdElement.id = id;
            tdElement.onmouseover = function(){mouseOver(id)};
            tdElement.onclick = function(){mouseOverRemove(id)};

            trElement.appendChild(tdElement);

            document.createElement('button')
        }

    } 
    
    
}

function changeColor(color){
    currentColor = color;
    
}

populate();