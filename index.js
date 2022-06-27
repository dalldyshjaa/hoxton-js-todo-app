let state = {
  showCompleted: false,
};

document.querySelector("#show-completed").addEventListener("click", (e) => {
  state.showCompleted = e.target.checked ? true : false;
  if (state.showCompleted) {
    document.querySelector(".dontshow").className = "completed";
  } else {
    document.querySelector(".completed").className = "dontshow";
  }
});
// document.querySelector(".show-completed-container");

// renderCompleted();
renderOptions();
document.querySelector("form").addEventListener("submit", addTodo);
let form1 = document.body.form;
