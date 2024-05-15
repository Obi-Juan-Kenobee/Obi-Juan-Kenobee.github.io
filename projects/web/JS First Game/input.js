export class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "ArrowUp" ||
          e.key === "ArrowDown" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight" ||
          e.key === "enter") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      } else if (e.key === " " && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      } else if (e.key === "Enter" && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
    });
    window.addEventListener("keyup", (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      } else if (e.key === " " || e.key === "Enter") {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}
