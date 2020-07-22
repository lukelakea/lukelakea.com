import Component from "@ember/component";
import anime from "animejs/lib/anime.es.js";

export default class extends Component {
  animatedSubtitles = ["Programmer", "Artist", "Developer", "Designer", "外人"];

  didInsertElement() {
    this._super(...arguments);
    var tl = anime.timeline({ loop: true });
    this.animatedSubtitles.forEach((t, idx) => {
      var textWrapper = this.element.querySelector(`.letters.letters-${idx}`);
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        `<span class='letter opacity-0'>$&</span>`
      );
      textWrapper.classList.remove("opacity-0");
      tl.add({
        targets: `.letters.letters-${idx} .letter`,
        opacity: [0, 1],
        // scale: [0.2, 1],
        easing: "easeInOutQuad",
        duration: 1500,
        delay: (el, i) => 150 * (i + 1),
      }).add({
        targets: `.letters.letters-${idx}`,
        opacity: 0,
        // scale: 3,
        duration: 500,
        easing: "easeOutExpo",
        delay: 0,
      });
    });
  }
}
