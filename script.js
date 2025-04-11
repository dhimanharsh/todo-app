let data = document.getElementById("inputData");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (data.value == "") {
    alert("PlEASE PROVIDE SOME TEXT");
  } else {
    let elm = document.createElement("tr");
    let elm1 = document.createElement("td");
    elm1.innerText = data.value;
    let elm2 = document.createElement("td");
    elm2.innerText = "Active";
    let elm3 = document.createElement("td");

    let elm4 = document.createElement("input");
    elm4.setAttribute("type", "checkbox");
    elm4.className = 'checkbox'

    elm4.addEventListener("change", function () {
      if (elm4.checked) {
        elm.style.textDecoration = "line-through";
        elm.style.color = "red";
        elm2.innerText = "completed";
      } else {
        elm.style.textDecoration = "none";
        elm.style.color = "black";
        elm2.innerText = "active";
      }
    });
    document.getElementsByTagName("table")[0].appendChild(elm);
    elm.appendChild(elm1);
    elm.appendChild(elm2);
    elm.appendChild(elm3);
    elm3.appendChild(elm4);
  }
});

let a = 0;
let b = 0;
console.log();
