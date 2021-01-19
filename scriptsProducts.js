
var ctx = document.getElementById('myChart').getContext('2d');
var myPieChart1 = new Chart(ctx, {
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

function changeChart(obj) {

    let ctx = document.getElementById('myChart').getContext('2d');
    let button_id = parseInt(obj.id, 10);

    switch (button_id) {
        case 1:
            let myPieChart1 = new Chart(ctx, {
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
        console.log(button_id);
            break;
        case 2:

             let myPieChart2 = new Chart(ctx, {
                type: 'pie',
                data: {
                            labels: ['Kury','Krowy'],
                            datasets: [{
                                label: 'My First dataset',
                                backgroundColor: ["#074D9", "#FF4136","rgb(23, 2, 132)"],
                                hoverBorderColor: ["#074D2", "#FF4139","rgb(23, 2, 135)"],
                                borderColor: 'rgb(55, 99, 132)',
                                data: [40,60],
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
            console.log(button_id);
            break;
    
        default:
            let myPieChart3 = new Chart(ctx, {
                type: 'pie',
                data: {
                            labels: ['Kury','Krowy','Gołębie'],
                            datasets: [{
                                label: 'My First dataset',
                                backgroundColor: ["#074D9", "#FF4136","rgb(23, 2, 132)"],
                                hoverBorderColor: ["#074D2", "#FF4139","rgb(23, 2, 135)"],
                                borderColor: 'rgb(55, 99, 132)',
                                data: [20,60,20],
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
            console.log("Kliknięto w 3 przycisk");
            break;
    }

}
