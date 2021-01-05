var ctx = document.getElementById('myChart').getContext('2d');



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
