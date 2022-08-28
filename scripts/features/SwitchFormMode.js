export default class SwitchFormMode {
  MODES = {
    registration: "registration",
    login: "login",
  };

  toggleFormMode(e) {
    e.stopPropagation();

    const selectedMode = e.target.dataset.mode;

    if (selectedMode === this.MODES.registration) {
      this.$form.classList.add("registration-mode");
    } else if (selectedMode === this.MODES.login) {
      this.$form.classList.remove("registration-mode");
    }
  }

  init() {
    this.$modesButtons = document.querySelector(".js-modes-buttons");
    this.$form = document.getElementById("form");
    this.$modesButtons.addEventListener("click", (e) => this.toggleFormMode(e));
  }
}
