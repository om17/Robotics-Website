const particlesJSON = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500, // Denser the smaller the number.
      },
    },
    color: {
      // The color for every node, not the connecting lines.
      value: "#C0C0C0", // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
    },
    shape: {
      type: "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
      stroke: {
        // The border
        width: 1,
        color: "#145ea8",
      },
      polygon: {
        // if the shape is a polygon
        nb_sides: 5,
      },
      image: {
        // If the shape is an image
        src: "",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.7,
      random: true,
    },
    size: {
      value: 10,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150, // The radius before a line is added, the lower the number the more lines.
      color: "#007ecc",
      opacity: 0.5,
      width: 2,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top", // Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
      random: true,
      straight: false, // Whether they'll shift left and right while moving.
      out_mode: "bounce", // What it'll do when it reaches the end of the canvas, either "out" or "bounce".
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: {
        enable: true,
        mode: "repulse",
      },
      modes: {
        repulse: {
          distance: "20",
          duration: "1.5",
        },
      },
    },
  },
};

particlesJS("particles-js", particlesJSON);
