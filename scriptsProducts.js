
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

function removeData(chart) {
    while(chart.data.labels.length > 0) {
        chart.data.labels.pop();
    }
    chart.data.datasets.forEach((dataset) => {
        while(dataset.data.length > 0) {
            dataset.data.pop();
        }
    });
    chart.update();
}

function addData(chart, label, data){
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}



function changeChart(obj) {
    let ctx = document.getElementById('myChart').getContext('2d');

    let button_id = parseInt(obj.id, 10);

    switch(button_id){
        case 1:
            let labels= ['Kury','Krowy','Zwierzeta domowe'];
            let data=[40,25];
            myPieChart.options.title.text = 'ALE JAJA';
            removeData(myPieChart);
            addData(myPieChart, labels, data);

            // myPieChart.update();
            break;
            default:
                break;

    }













    // switch (button_id) {
    //     case 1:
    //         let myPieChart1 = new Chart(ctx, {
    //             type: 'pie',
    //             data: {
    //                         labels: ['Kury','Krowy','Zwierzeta domowe'],
    //                         datasets: [{
    //                             label: 'My First dataset',
    //                             backgroundColor: ["#074D9", "#FF4136","rgb(23, 2, 132)"],
    //                             hoverBorderColor: ["#074D2", "#FF4139","rgb(23, 2, 135)"],
    //                             borderColor: 'rgb(55, 99, 132)',
    //                             data: [40,55,5],
    //                         }]
    //                     },
                    
    //                     options: {
    //                         responsive: true,
    //                         title:{
    //                             display: true,
    //                             text: "Zwierzęta",
    //                             fontColor: 'black'
    //                         },
    //                         legend: {
    //                             labels: {
    //                                 fontColor: 'black'
    //                             }
    //                         }
    //                     }
    //         });     
    //     console.log(button_id);
    //     button_id=0;
    //         break;
    //     case 2:

    //          let myPieChart2 = new Chart(ctx, {
    //             type: 'pie',
    //             data: {
    //                         labels: ['Kury','Krowy'],
    //                         datasets: [{
    //                             label: 'My First dataset',
    //                             backgroundColor: ["#074D9", "#FF4136","rgb(23, 2, 132)"],
    //                             hoverBorderColor: ["#074D2", "#FF4139","rgb(23, 2, 135)"],
    //                             borderColor: 'rgb(55, 99, 132)',
    //                             data: [40,60],
    //                         }]
    //                     },
                    
    //                     options: {
    //                         responsive: true,
    //                         title:{
    //                             display: true,
    //                             text: "Zwierzęta",
    //                             fontColor: 'black'
    //                         },
    //                         legend: {
    //                             labels: {
    //                                 fontColor: 'black'
    //                             }
    //                         }
    //                     }
    //         });
    //         console.log(button_id);
    //         button_id=0;
    //         break;
    
    //     default:
    //         let myPieChart3 = new Chart(ctx, {
    //             type: 'pie',
    //             data: {
    //                         labels: ['Kury','Krowy','Gołębie'],
    //                         datasets: [{
    //                             label: 'My First dataset',
    //                             backgroundColor: ["#074D9", "#FF4136","rgb(23, 2, 132)"],
    //                             hoverBorderColor: ["#074D2", "#FF4139","rgb(23, 2, 135)"],
    //                             borderColor: 'rgb(55, 99, 132)',
    //                             data: [20,60,20],
    //                         }]
    //                     },
                    
    //                     options: {
    //                         responsive: true,
    //                         title:{
    //                             display: true,
    //                             text: "Zwierzęta",
    //                             fontColor: 'black'
    //                         },
    //                         legend: {
    //                             labels: {
    //                                 fontColor: 'black'
    //                             }
    //                         }
    //                     }
    //         });
    //         console.log("Kliknięto w 3 przycisk");
    //         button_id=0;
    //         break;
    // }

}
