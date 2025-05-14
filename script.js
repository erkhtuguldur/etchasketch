const container=document.querySelector("#container");
const bodyElement=document.querySelector("body");
let penColor="rgb(0,0,0)";

const rightContainer=document.createElement("div");
const leftContainer=document.createElement("div");




const dimensionButton=document.createElement("button");
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


const clearButton=document.createElement("button");
clearButton.textContent="Clear";
clearButton.addEventListener("click",function(){
    let list=container.children;
    for(let child of list){
        child.style.backgroundColor="rgb(255,255,255)";
    }
});

const eraserButton=document.createElement("button");
eraserButton.textContent="Eraser";
eraserButton.addEventListener("click",function(){penColor="rgb(255,255,255)"});

const colorPicker=document.createElement("input");
colorPicker.type="color";
colorPicker.addEventListener("change",function(){
     penColor=colorPicker.value;
});
colorPicker.addEventListener("click",function(){
    penColor=colorPicker.value;
});

bodyElement.insertBefore(rightContainer,container);
bodyElement.appendChild(leftContainer);

rightContainer.style.display="flex";
rightContainer.style.flex="auto";


leftContainer.style.display="flex";
leftContainer.style.flex="auto";


rightContainer.appendChild(colorPicker);
rightContainer.appendChild(eraserButton);
rightContainer.style.justifyContent="center"


leftContainer.style.justifyContent="center";
leftContainer.appendChild(dimensionButton);
leftContainer.appendChild(clearButton);



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

