const container=document.querySelector("#container");
gridMaker();
function gridMaker(dimension=64){
    for(let i=0;i<dimension*dimension;i++){
        let cellDiv=document.createElement("div");
        cellDiv.addEventListener("mouseenter",function (e){
            e.target.style.backgroundColor="black";
        });
        let percent=100/dimension;
        cellDiv.style.width=percent+"%";
        cellDiv.style.height=percent+"%";
        container.appendChild(cellDiv);
    }
}
