var ctx = document.getElementById('myChart').getContext('2d');
ctx.height = 300;
            var fantanoRating = document.getElementById('fantanoAlbumScore').innerHTML;
            var pfRating = document.getElementById('pitchforkAlbumScore').innerHTML;
            var metaRating = document.getElementById('metacriticAlbumScore').innerHTML;
            var userRating = document.getElementById('userAlbumScore').innerHTML;
            var myChart = new Chart(ctx, {
                  type: 'bar',
                  data: {
                    labels: ['Fantano', 'Pitchfork', 'Critics', 'Public'],
                    datasets: [{
                        backgroundColor: "#51AFC0",
                        label: "Ratings",
                        data: [fantanoRating, pfRating, metaRating, userRating]
                    }]
                  },
                  options: {
                    responsive: true, 
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                max: 10,
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
            
        function update() {
            var fantanoRating = document.getElementById('fantanoAlbumScore').innerHTML;
            var pfRating = document.getElementById('pitchforkAlbumScore').innerHTML;
            var metaRating = document.getElementById('metacriticAlbumScore').innerHTML;
            var userRating = document.getElementById('userAlbumScore').innerHTML;
            myChart.data.datasets[0].data[0] = fantanoRating;
            myChart.data.datasets[0].data[1] = pfRating;
            myChart.data.datasets[0].data[2] = metaRating;
            myChart.data.datasets[0].data[3] = userRating;
           myChart.update();
        }