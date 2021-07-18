let btn = document.querySelector("#btn");
// btn.onclick = function () {
//   btn.style.width = "500px";
//   btn.style.height = "300px";
//   btn.style.border = "0";
// };

// childNode  dev tool 에서 확인할수 있음
let list = document.childNodes[2].childNodes[3].childNodes[3];
list.style.color = "red";

console.log(list.parentElement);
console.log(list.nextSibling.nextSibling);

// li 아이템 다 선택
let anotherList = document.getElementsByTagName("li");

// 94. Node Types and Node Name , node value

list.nodeValue = "Too bad";
btn.nodeValue = "why";
console.log(btn.nodeValue);

console.log(list.nodeValue);

// Event listener
console.log(anotherList);

anotherList[0].onmouseenter = function () {
  console.log("over");
  anotherList[0].childNodes[0].nodeValue = "ahah";
};
anotherList[0].onmouseleave = function () {
  anotherList[0].childNodes[0].nodeValue = "pink";
};

// btn.onclick = btn.remove();

// Attributes  ----------------------------------->

let input = document.getElementById("input");
input.value = "this is Attribute";
input.style.color = "white";

//  무슨 Attributes 가 있는지 확인
console.log(input.attributes);
//  무슨 Attributes 가져오기
console.log(input.getAttribute("tacos"));

// Adding Nodes

console.log(btn);

btn.onclick = function () {
  let node = document.createElement("li");
  node.style.color = "pink";
  node.appendChild(document.createTextNode(input.value));
  list.appendChild(node);
};
