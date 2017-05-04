function upload(){
  //Get input from text input
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;
  //Alert displaying text
  alert("choose" + filename);
}
function upload1() {
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}