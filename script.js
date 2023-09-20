function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

var tabButtons=document.querySelectorAll(".experience__container .button__container button");
var tabPanels=document.querySelectorAll(".experience__container .tabPanel");

function showPanel(panelIndex, colorCode){
    

    tabButtons.forEach(function(node){
        node.style.textDecoration = "none"; 
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.textDecoration = "underline";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}


function showPanel(panelIndex, colorCode){
    

    tabButtons.forEach(function(node){
        node.style.textDecoration = "none"; 
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.textDecoration = "underline";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0,'#FFFFF')
