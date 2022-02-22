import { Mondrian, DefaultMondrianBrushOptions } from "@mondrian/mondrian";

class Application {
  mondrian!: Mondrian;
  constructor() {
    // create instance
    this.mondrian = new Mondrian({
      container: document.getElementById("draw-container"),
      viewport: true,
      background: true,
      debug: false,
      useBuiltinClient: false,
      worldWidth: 600,
      worldHeight: 500,
    });

    this.mondrian.interaction.emit("state:change", {
      player: {
        brush: DefaultMondrianBrushOptions,
      },
    });
  }

  initialize() {}

  finalize() {}

  run() {
    console.log("hello typescript");
  }
}

export { Application };
