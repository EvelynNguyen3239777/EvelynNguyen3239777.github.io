$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 700, 250, 15);
createPlatform(300, 600, 100, 16);
createPlatform(500, 500, 250, 18);
createPlatform(700, 400, 300, 15);
createPlatform(545, 300, 100, 10);
createPlatform(715, 200, 270, 19);
    // TODO 3 - Create Collectables
createCollectable("steve", 110, 600);
createCollectable("max", 305, 500);
createCollectable("diamond", 600, 400);
createCollectable("grace", 800, 100);
    // TODO 4 - Create Cannons
createCannon("right", 500, 900)
createCannon("right", 300, 2000)
createCannon("top", 100, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
