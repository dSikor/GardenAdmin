window.onload = function startPage(){
       const elements = [...document.getElementsByClassName("farmerOption")];
        elements.forEach(function(item) {
        item.classList.add('farmerOption--show');
        })
}

let degreesChange=0;

const addRotate5deg = function() {
        degreesChange=5;
        this.style.transform = `rotate(${degreesChange}deg)`;    
}

const deleteRotate5deg = function() {
        this.style.transform = `rotate(${0}deg)`;
}
       
const items = [...document.getElementsByClassName("farmerOption")];
items.forEach((item) => item.addEventListener("mouseover", addRotate5deg))
items.forEach((item) => item.addEventListener("mouseout", deleteRotate5deg))





