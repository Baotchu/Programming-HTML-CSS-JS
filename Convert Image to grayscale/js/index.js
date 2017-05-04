var image; // Global variable
function upload() {
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}
function makeGray() {
  for (var px of image.values()) {
    var avg = (px.getRed() + px.getGreen() + px.getBlue())/3;
    px.setRed(avg);
    px.setGreen(avg);
    px.setBlue(avg);
  }
  var imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}