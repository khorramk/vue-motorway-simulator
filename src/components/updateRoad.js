function updateRoad() {
    const road = document.getElementById('road');
    let roadPosition = 0;

  //   function changeColor() {
  //     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  //     road.style.backgroundColor = randomColor;
  //   }

    function update() {
      roadPosition += 5;
      road.style.backgroundPositionY = roadPosition + 'px';
      // changeColor(); // Call the color change function

      // Add obstacles at specific distances
      if (distanceTraveled >= 200 && distanceTraveled <= 300) {
        createObstacle(75, roadPosition);
      }
      if (distanceTraveled >= 400 && distanceTraveled <= 500) {
        createObstacle(50, roadPosition);
      }

      setTimeout(update, 16); // 60 frames per second
    }

    update();
  }