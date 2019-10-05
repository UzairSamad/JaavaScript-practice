//deleting row
function Delete(row) {
  document.getElementById("my_Table").deleteRow(row);
}

// incrrasing or decreasing counting
var count = 0;
function increase() {
  count++;
  document.getElementById("add").value = count;
}
function decrease() {
  count--;
  document.getElementById("add").value = count;
}
// document.getElementById("add").value=count;

//           showing form data in table
function data() {
  var data = document.getElementById("input1").value;
  var data1 = document.getElementById("input2").value;
  var data2 = document.getElementById("input3").value;

  var abc = (document.getElementById("td1").innerHTML = data);
  document.getElementById("td2").innerHTML = data1;
  document.getElementById("td3").innerHTML = data2;

  console.log(abc);
}
