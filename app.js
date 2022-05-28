const addList = document.querySelector(".add-list");
const addBtn = document.querySelector(".fa-plus");
const inputField = document.getElementById("input");

addBtn.addEventListener("click", () => {
  if (inputField.value === "") {
    Toastify({
      text: "This is a toast",
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, var(--pink), var(--purple))",
      },

      duration: 3000,
    }).showToast();
  } else {
    const createElement = document.createElement("li");
    const createBtn = document.createElement("button");

    createBtn.classList.add("create-Btn");
    createElement.classList.add("create-li");

    createElement.innerHTML = inputField.value;
    createBtn.innerHTML = '<i class="fas fa-times"></i>';

    createElement.appendChild(createBtn);
    addList.appendChild(createElement);

    inputField.value = "";

    createElement.addEventListener("click", () => {
      createElement.style.textDecoration = "line-through #8b5cf6";
    });

    createBtn.addEventListener("click", () => {
      addList.removeChild(createElement);
    });
  }
});
