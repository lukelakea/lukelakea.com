import Component from '@ember/component';
import anime from 'animejs/lib/anime.es.js';

export default class extends Component {

  animatedSubtitles = [
    "Programmer",
    "Artist",
    "Developer",
    "Designer",
    "外人"
  ]

  didInsertElement() {
    this._super(...arguments);
    var tl = anime.timeline({loop: true})
    this.animatedSubtitles.forEach(function(t, idx){
      tl.add({
        targets: `.letters.letters-${idx}`,
        opacity: [0,1],
        scale: [0.2, 1],
        duration: 800,
      }).add({
        targets: `.letters.letters-${idx}`,
        opacity: 0,
        scale: 3,
        duration: 500,
        easing: "easeInExpo",
        delay: 500
      });
    });
  }
}
