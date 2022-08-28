const $modesButtons = document.querySelector(".js-modes-buttons");

$modesButtons.addEventListener("click", (e) => toggleFormMode(e));

const MODES = {
  registration: "registration",
  login: "login",
};

const $form = document.getElementById("form");
function toggleFormMode(e) {
  e.stopPropagation();

  const selectedMode = e.target.dataset.mode;

  if (selectedMode === MODES.registration) {
    $form.classList.add("registration-mode");
  } else if (selectedMode === MODES.login) {
    $form.classList.remove("registration-mode");
  }
}
