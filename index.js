const r = new rive.Rive({
  src: "./assets/riv/christmas_card.riv",
  // Or the path to a public Rive asset
  // src: '/public/example.riv',
  canvas: document.getElementById("rive-canvas"),
  autoplay: true,
  stateMachines: "Christmas Card",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
