abstract class Car {
  constructor(
    public model: string,
    public year: number
  ) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  displayCarInfo(): void {
    console.log(`Model: ${this.model}, Year: ${this.year}`);
  }
}

class Suv extends Car {
  displayCarInfo(): void {
    console.log(`Model: ${this.model}, Year: ${this.year}`);
  }
}

class Hatch extends Car {
  displayCarInfo(): void {
    console.log(`Model: ${this.model}, Year: ${this.year}`);
  }
}

class CarFactory {
  public createCar(
    type: "sedan" | "suv" | "hatch",
    model: string,
    year: number
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, year);

      case "suv":
        return new Suv(model, year);

      case "hatch":
        return new Hatch(model, year);
    }
  }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Camry", 2024);
sedan.displayCarInfo();

const suv = carFactory.createCar("suv", "RAV4", 2024);
suv.displayCarInfo();

const hatch = carFactory.createCar("hatch", "Corolla", 2024);
hatch.displayCarInfo();
