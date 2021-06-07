var point1 = document.getElementById("point");
var Elo1 = document.getElementById("elo");
point1.addEventListener("input",add1);
Elo1.addEventListener("click", add1);
var point2 = document.getElementById("point1");
var Elo2 = document.getElementById("elo1");
point2.addEventListener("input",add2);
Elo2.addEventListener("click", add2);
function add1(){
  var one = parseFloat(point1.value);
  Elo1.innerHTML = one + 1;
}
function add2(){
  var two = parseFloat(point2.value);
  Elo2.innerHTML = two + 1;
}
function tb() {
  alert("success");
}
function reset() {
  location.reload();
}
