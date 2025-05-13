const container=document.querySelector("#container");
const bodyElement=document.querySelector("body");
let penColor="rgb(0,0,0)";

const rightContainer=document.createElement("div");
const leftContainer=document.createElement("div");
const colorPicker=document.createElement("input");
const colorButton=document.createElement("button");
const eraserButton=document.createElement("button");
const dimensionButton=document.createElement("button");
const clearButton=document.createElement("button");


dimensionButton.textContent="Change dimensions";
dimensionButton.addEventListener("click",function(){
    notValid=true;
    let dim=16;
    while(notValid){
        dim=prompt("Enter a number from 16 to 100:");
        if(dim>=16&& dim<=100){
            notValid=false;
        }
        else{
            alert("invalid input");
        }
    }
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    gridMaker(dim);
})

clearButton.textContent="Clear";
clearButton.addEventListener("click",function(){
    let list=container.children;
    for(let child of list){
        child.style.backgroundColor="rgb(255,255,255)";
    }
});

eraserButton.textContent="Eraser";
eraserButton.addEventListener("click",function(){penColor="rgb(255,255,255)"});

colorButton.textContent="Select";
colorPicker.type="color";
bodyElement.insertBefore(rightContainer,container);
bodyElement.appendChild(leftContainer);
rightContainer.style.display="flex"
leftContainer.style.display="flex";
rightContainer.style.flex="auto"
leftContainer.style.flex="auto";
rightContainer.appendChild(colorPicker);
rightContainer.appendChild(colorButton);
rightContainer.appendChild(eraserButton);
rightContainer.style.justifyContent="center"


leftContainer.style.justifyContent="center";
leftContainer.appendChild(dimensionButton);
leftContainer.appendChild(clearButton);
colorButton.addEventListener("click",function(){
    penColor=colorPicker.value;
});


function gridMaker(dimension=16){
    for(let i=0;i<dimension*dimension;i++){
        let cellDiv=document.createElement("div");
        cellDiv.addEventListener("mouseenter",function (e){
            e.target.style.backgroundColor=penColor;
        });
        let percent=100/dimension;
        cellDiv.style.width=percent+"%";
        cellDiv.style.height=percent+"%";
        container.appendChild(cellDiv);
    }
}
gridMaker();

