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
    
    const homeSectionTop = homeSection.offsetTop;
    const serviceSectionTop = serviceSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= serviceSectionTop - 10) {
        document.getElementById('chages').style.marginTop='-42px'; 
    } else {
        document.getElementById('chages').style.marginTop='-85px';  
    }
});