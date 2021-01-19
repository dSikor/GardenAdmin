var ctx = document.getElementById('myChart').getContext('2d');

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2015-01", "2015-02", "2015-03"],
        datasets: [{
            label: 'My First dataset',
            data: [34, 22, 50, 10],
            backgroundColor: [
                'rgba(0,0,0)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(0,0,0)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderSkipped:['bottom','left','right'],
            borderWidth: 1,
           
            
        }]
    },
    options: {
        
        responsive: false,
        scales: {
          xAxes: [{
            ticks: {
                fontColor: "black",
                fontSize: 15,
            //   maxRotation: 90,
            //   minRotation: 80
            },
              gridLines: {
              offsetGridLines: true, // à rajouter
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: "black",
              fontSize: 15,
              fontStyle: 'normal',
              beginAtZero: true
            }
          }]
        }
          
      },
});