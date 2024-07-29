function myFunction() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "dark" ? "light" : "dark";
    a=document.getElementById('side').style.backgroundColor;
    if (a=="white"){
        document.getElementById('side').style.backgroundColor="rgb(33, 37, 41)";
    }
    else
    {
        document.getElementById('side').style.backgroundColor="white";
    }
    a=document.getElementById('two').style.backgroundColor;
    if (a=="white"){
        document.getElementById('two').style.backgroundColor="rgb(33, 37, 41)";
    }
    else
    {
        document.getElementById('two').style.backgroundColor="white";
    }
    a=document.getElementById('three').style.backgroundColor;
    if (a=="white"){
        document.getElementById('three').style.backgroundColor="rgb(33, 37, 41)";
    }
    else
    {
        document.getElementById('three').style.backgroundColor="white";

    }
    a=document.getElementById('tog').style.backgroundColor;
    if (a=="white"){
        document.getElementById('tog').style.backgroundColor="rgb(33, 37, 41)";
    }
    else
    {
        document.getElementById('tog').style.backgroundColor="white";

    }
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.classList.contains('black-text')) {
            link.classList.remove('black-text');
            link.classList.add('white-text');
        } else {
            link.classList.remove('white-text');
            link.classList.add('black-text');
        }
    });

    const svgImages = document.querySelectorAll('.sideimage');
    svgImages.forEach(svg => {
        if (svg.classList.contains('black-fill')) {
            svg.classList.remove('black-fill');
            svg.classList.add('white-fill');
        } else {
            svg.classList.remove('white-fill');
            svg.classList.add('black-fill');
        }
    });

    a=document.getElementById('tab1').style.backgroundColor;
    if (a=="rgb(239, 239, 239)"){
        document.getElementById('tab1').style.backgroundColor="rgb(33, 37, 41)";
    }
    else
    {
        document.getElementById('tab1').style.backgroundColor="rgb(239, 239, 239)";

    }
}



document.getElementById('clickableImage').addEventListener('click', function() {
    document.getElementById('tog').style.zIndex = '5';
    // console.log("working");
});

document.getElementById('clicktwo').addEventListener('click', function() {
    document.getElementById('tog').style.zIndex = '-5'; 
});


window.addEventListener('scroll', function() {
    const homeSection = document.getElementById('dash');
    const serviceSection = document.getElementById('ns');
    
    const serviceSectionTop = serviceSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= serviceSectionTop - 10) {
        document.getElementById('chages').style.marginTop='-42px'; 
    } else {
        document.getElementById('chages').style.marginTop='-85px';  
    }
});



async function getWeather() {
    const cityName = document.getElementById('city-name').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (cityName.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://open-weather13.p.rapidapi.com/city/${encodeURIComponent(cityName)}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f90ee5d99dmsh7c8c9fe4a4cf0e8p1e97ccjsnedb504a92c8e',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        if (result) {
            resultsDiv.innerHTML = `
                <h3>Weather in ${result.name}</h3>
                <p>Temperature: ${result.main.temp}°C</p>
                <p>Weather: ${result.weather[0].description}</p>
                <p>Humidity: ${result.main.humidity}%</p>
                <p>Wind Speed: ${result.wind.speed} m/s</p>
            `;
        } else {
            resultsDiv.innerHTML = '<p>No weather data found.</p>';
        }
    } catch (error) {
        resultsDiv.innerHTML = '<p>Error fetching data.</p>';
        console.error('Error:', error);
    }
}

