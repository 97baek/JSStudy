type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  ['className']?: string;
};

let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: 'red',
};

const makeBox = (
  width: number,
  height: number,
  borderRadius: number,
  backgroundColor: string,
): Box => {
  return {
    width,
    height,
    borderRadius,
    backgroundColor,
  };
};

class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(width: number, height: number, borderRadius: number, backgroundColor: string) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10, 10, 0, 'blue');

console.log(boxShape instanceof Shape);

class Circle {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  area = () => this.#radius * this.#radius * Math.PI;
}

class Rect {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(circle.area());
console.log(rect.area());

const calculateCircleArea = (radius) => {
  return radius * radius * Math.PI;
};

const calculateRectArea = (width, height) => {
  return width * height;
};
