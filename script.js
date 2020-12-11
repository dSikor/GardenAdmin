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





var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

