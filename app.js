 // Function to generate a random color in hexadecimal format
 function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 12)];
    }
    return color;
  }

  // Function to change the background color
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
  }

  // Set an interval to change the background color every 3 seconds (3000 milliseconds)
  setInterval(changeBackgroundColor, 200);