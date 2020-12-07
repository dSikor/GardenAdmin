window.onload = function startPage(){
       const elements = [...document.getElementsByClassName("farmerOption")];
        elements.forEach(function(item) {
        item.classList.add('farmerOption--show');
        })
}