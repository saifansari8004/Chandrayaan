class Spacecraft {
    constructor(x, y, z, direction) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.direction = direction; // N, S, E, W, Up, Down
    }
  
    moveForward() {
      switch (this.direction) {
        case 'N':
          this.y++;
          break;
        case 'S':
          this.y--;
          break;
        case 'E':
          this.x++;
          break;
        case 'W':
          this.x--;
          break;
        case 'Up':
          this.z++;
          break;
        case 'Down':
          this.z--;
          break;
      }
    }
  
    moveBackward() {
      switch (this.direction) {
        case 'N':
          this.y--;
          break;
        case 'S':
          this.y++;
          break;
        case 'E':
          this.x--;
          break;
        case 'W':
          this.x++;
          break;
        case 'Up':
          this.z--;
          break;
        case 'Down':
          this.z++;
          break;
      }
    }
  
    turnLeft() {
      switch (this.direction) {
        case 'N':
          this.direction = 'W';
          break;
        case 'S':
          this.direction = 'E';
          break;
        case 'E':
          this.direction = 'N';
          break;
        case 'W':
          this.direction = 'S';
          break;
      }
    }
  
    turnRight() {
      switch (this.direction) {
        case 'N':
          this.direction = 'E';
          break;
        case 'S':
          this.direction = 'W';
          break;
        case 'E':
          this.direction = 'S';
          break;
        case 'W':
          this.direction = 'N';
          break;
      }
    }
  
    turnUp() {
      if (this.direction === 'N' || this.direction === 'S') {
        this.direction = 'Up';
      }
    }
  
    turnDown() {
      if (this.direction === 'N' || this.direction === 'S') {
        this.direction = 'Down';
      }
    }
  
    executeCommands(commands) {
      for (const command of commands) {
        switch (command) {
          case 'f':
            this.moveForward();
            break;
          case 'b':
            this.moveBackward();
            break;
          case 'l':
            this.turnLeft();
            break;
          case 'r':
            this.turnRight();
            break;
          case 'u':
            this.turnUp();
            break;
          case 'd':
            this.turnDown();
            break;
          default:
            // Ignore invalid commands
            break;
        }
      }
    }
  }

const spacecraft = new Spacecraft(0, 0, 0, 'N');
const spacecraftElement = document.getElementById('spacecraft');

function updateSpacecraftPosition() {
    spacecraftElement.style.transform = `translate3d(${spacecraft.x * 50}px, ${spacecraft.y * 50}px, ${spacecraft.z * 50}px)`;
}

updateSpacecraftPosition();

document.getElementById('moveForward').addEventListener('click', () => {
    spacecraft.moveForward();
    updateSpacecraftPosition();
});

document.getElementById('moveBackward').addEventListener('click', () => {
    spacecraft.moveBackward();
    updateSpacecraftPosition();
});

document.getElementById('turnLeft').addEventListener('click', () => {
    spacecraft.turnLeft();
});

document.getElementById('turnRight').addEventListener('click', () => {
    spacecraft.turnRight();
});

document.getElementById('turnUp').addEventListener('click', () => {
    spacecraft.turnUp();
});

document.getElementById('turnDown').addEventListener('click', () => {
    spacecraft.turnDown();
});
