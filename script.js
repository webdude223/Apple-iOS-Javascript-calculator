function dostuff(xin) {
  myValue = xin.getAttribute("value");
  console.log("my value: ", myValue);

}

function displayOut(xin){
  let element = document.getElementsByClassName("output")[0];
  element.getAttribute("value") = xin;
}

var xxx = document.getElementsByClassName("output")[0];

// console.log("output2: ", document.getElementById("test").getAttribute("value"));

// console.log("other: ", xxx.className);
console.log("tag", document.getElementsByTagName("input").className);
console.log("h1", document.getElementsByTagName("h1").innerHTML)
