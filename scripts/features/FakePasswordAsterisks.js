import { debounce } from "../utils/debounce.js";

export default class FakePasswordAsterisks {
  constructor() {
    this.timer = { timerId: null };
  }

  displayAsterisk({ target }, $selectedFakeInput) {
    const inputLength = target.value.length;
    const asteriskStr = new Array(inputLength).fill("✱").join("");
    $selectedFakeInput.textContent = asteriskStr;
  }

  inputDisplayAsterisk(e) {
    const target = e.target;
    if (target.getAttribute("type") !== "password") return;

    const $selectedFakeInput = target.nextElementSibling;
    $selectedFakeInput.innerText = target.value;

    debounce(
      () => this.displayAsterisk(e, $selectedFakeInput),
      1000,
      this.timer
    );
  }

  init() {
    this.$fakePasswordContainer = document.querySelector(
      ".js-fake-password-container"
    );

    this.$fakePasswordContainer.addEventListener("keyup", (e) =>
      this.inputDisplayAsterisk(e)
    );
  }
}
