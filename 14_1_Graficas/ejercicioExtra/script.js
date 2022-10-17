const labels = [
    'experience',
    'weight',
    'height',

  ];

  var data = "";

var pokemon = "blastoise"
var url = `https://pokeapi.co/api/v2/pokemon/${pokemon}` 
fetch(url)
.then(res=>res.json())
.then(pokemon =>{
    data = {
        labels: labels,
        datasets: [{
        label: `The chart of ${pokemon.name}`,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [pokemon.base_experience, pokemon.weight, pokemon.height],
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {}
    };
    
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
    
})


