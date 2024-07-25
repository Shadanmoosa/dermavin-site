document.getElementById('clickableImage').addEventListener('click', function() {
    document.getElementById('colorDiv').style.zIndex = '5'; 
});

document.getElementById('clicktwo').addEventListener('click', function() {
    document.getElementById('colorDiv').style.zIndex = '-2'; 
});

function myFunction() {
    var element = document.body;
    element.dataset.bsTheme =
      element.dataset.bsTheme == "dark" ? "light" : "dark";
      a=document.getElementById('main').style.backgroundColor;
      if (a=="white"){
          document.getElementById('main').style.backgroundColor="rgb(33, 37, 41)";
      }
      else
      {
          document.getElementById('main').style.backgroundColor="white";
      }
      a=document.getElementById('side').style.backgroundColor;
      if (a=="white"){
          document.getElementById('side').style.backgroundColor="rgb(33, 37, 41)";
      }
      else
      {
          document.getElementById('side').style.backgroundColor="white";
      }
      a=document.getElementById('side1').style.backgroundColor;
      if (a=="white"){
          document.getElementById('side1').style.backgroundColor="rgb(33, 37, 41)";
      }
      else
      {
          document.getElementById('side1').style.backgroundColor="white";
      }
      a=document.getElementById('side2').style.backgroundColor;
      if (a=="white"){
          document.getElementById('side2').style.backgroundColor="rgb(33, 37, 41)";
      }
      else
      {
          document.getElementById('side2').style.backgroundColor="white";
      }
      a=document.getElementById('side3').style.backgroundColor;
      if (a=="ghostwhite"){
          document.getElementById('side3').style.backgroundColor="rgb(33, 37, 41)";
      }
      else
      {
          document.getElementById('side3').style.backgroundColor="ghostwhite";
      }

    //   a=document.getElementById('side3').style.backgroundColor;
    //   if (a=="ghostwhite"){
    //       document.getElementById('side3').style.backgroundColor="rgb(33, 37, 41)";
    //   }
    //   else
    //   {
    //       document.getElementById('side3').style.backgroundColor="ghostwhite";
    //   }



    
    
  }
