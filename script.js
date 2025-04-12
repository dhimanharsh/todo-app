let data = document.getElementById("inputData");
let arr = [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (arr.includes(data.value)) {
    return alert("Value already exists!");
  } 
  else if (data.value !== "") {
    arr.push(data.value);
  } 
  else {
    return alert("Please enter a value.");
  }

  let elm = document.createElement("tr");
  let elm1 = document.createElement("td");
  elm1.innerText = data.value;
  let elm2 = document.createElement("td");
  elm2.innerText = "Active";
  let elm3 = document.createElement("td");
  elm3.className = "dltndmore";
  let elm4 = document.createElement("input");
  elm4.setAttribute("type", "checkbox");
  elm4.className = "checkbox";

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
  let elm5 = document.createElement("i");
  elm5.className = "fa-solid fa-trash";
  elm5.style.color = "#e90707";
  elm5.addEventListener("click", (e) => {
    e.preventDefault();
    elm.remove();
  });
  document.getElementsByTagName("table")[0].appendChild(elm);
  elm.appendChild(elm1);
  elm.appendChild(elm2);
  elm.appendChild(elm3);
  elm3.appendChild(elm4);
  elm3.appendChild(elm5);
  data.value = "";
});
