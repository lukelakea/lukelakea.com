export default function () {
  // Add your transitions here, like:
  this.transition(
    this.hasClass("project-fade"),
    this.use("crossFade", { duration: 300 })
  );
}
