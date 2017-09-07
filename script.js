var print = function(msg) {
  document.getElementById("output").innerHTML = "Length is " + msg;
};

document.getElementById("count-button").onclick = function(event) {
  print(document.getElementById('string').value.length);
};
