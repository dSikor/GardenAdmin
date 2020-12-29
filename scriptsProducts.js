// const itemsProducts = [...document.getElementsByClassName("farmerOption")];
// itemsProducts.forEach((item) => item.addEventListener("mouseout", deleteRotate5deg))


var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {

//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//         }]
//     },

  
//     options: {}
// });



var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
                labels: ['Kury','Krowy','Zwierzeta domowe'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: ["#074D9", "#FF4136","rgb(23, 2, 132)"],
                    hoverBorderColor: ["#074D2", "#FF4139","rgb(23, 2, 135)"],
                    borderColor: 'rgb(55, 99, 132)',
                    data: [40,55,5],
                }]
            },
        
            options: {
                responsive: true,
                title:{
                    display: true,
                    text: "Zwierzęta",
                    fontColor: 'black'
                },
                legend: {
                    labels: {
                        fontColor: 'black'
                    }
                }
            }
});


