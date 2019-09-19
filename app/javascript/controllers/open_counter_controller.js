// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "openCountOutput" ]

  connect() {
    let openCounterController = this;
    this.openCount = 0;

    $(this.element).on('show.bs.modal', (event) => {
      openCounterController.incrementCount();
    })
  }

  incrementCount() {
    this.openCount++;
    this.openCountOutputTarget.textContent = this.openCount;
  }
}
