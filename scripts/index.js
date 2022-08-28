import SwitchFormMode from "./features/SwitchFormMode.js";
import FakePasswordAsterisks from "./features/FakePasswordAsterisks.js";

class App {
  constructor() {
    this.switchModeFeature = new SwitchFormMode();
    this.fakePasswordAsterisksFeature = new FakePasswordAsterisks();
  }

  init() {
    this.switchModeFeature.init();
    this.fakePasswordAsterisksFeature.init();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new App().init();
});
