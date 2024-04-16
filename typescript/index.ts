// Prototype pattern is a creational design that allows cloning objects
interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }

  public clone(): Shape {
    let clonedProps: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(clonedProps, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(
    properties: ShapeProperties,
    public radius: number
  ) {
    super(properties);
  }

  public clone(): Shape {
    let clonedProps: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Circle(clonedProps, this.radius);
  }
}

let redRectangle = new Rectangle({ color: "red", x: 20, y: 100 }, 10, 20);
let anotherRectanle = redRectangle.clone();
anotherRectanle.properties.color = "blue";

console.log(redRectangle);
console.log(anotherRectanle);
