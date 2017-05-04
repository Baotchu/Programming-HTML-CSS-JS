function dochange(){
  alert("Click and Win $15,000,000");
}
function changecolor(){
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  dd1.className = "orangeback";
  dd2.className = "fuchsiaback";
}
function changetext(){
  var dd3 = document.getElementById("d1");
  var dd4 = document.getElementById("d2");
  
  dd3.innerHTML = "Bonjour";
  dd4.innerHTML = "Sayonara";
}