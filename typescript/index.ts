class Grinder {
  public grindBeans(): void {
    console.log("Grinding beans started");
  }
}

class Boiler {
  public boilWater(): void {
    console.log("Boiling Water");
  }
}

class Brewer {
  public brew(): void {
    console.log("Brewing coffee");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  public makeCoffee(): void {
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brew();
    console.log("Coffee is ready");
  }
}

//client code
const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeFacade = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeFacade.makeCoffee();

//The end user doesnt need to know what are the steps and how many are to make a coffee
//And how these steps are interrelated to each other
//1 - Rampant dependencies
//2 - Overwhelming complexity
//3 - Overexposure of inner working
//4 - Need for a layered architecture

//Another example:

class Amplifier {
  public turnOn(): void {
    console.log("Turning on amplifier");
  }

  public setVolume(level: number): void {
    console.log(`Volume set to ${level}`);
  }
}

class DvdPlayer {
  public turnOn(): void {
    console.log("Turning on DvdPlayer");
  }

  public play(movie: string): void {
    console.log(`Playing movie ${movie}`);
  }
}

class Projector {
  public turnOn(): void {
    console.log("Turning on Projector");
  }

  public setInput(dvdPlayer: DvdPlayer): void {
    console.log("Input set to dvdplayer");
  }
}

class Lights {
  public dim(level: number): void {
    console.log(`Dimmering light to ${level}`);
  }
}

class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvd: DvdPlayer,
    private projector: Projector,
    private lights: Lights
  ) {}

  public watchMovie(movie: string, volume: number, level: number): void {
    this.lights.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvd.turnOn();
    this.projector.turnOn();
    this.projector.setInput(dvd);
    this.dvd.play(movie);
  }
}

const amplifier = new Amplifier();
const dvd = new DvdPlayer();
const projector = new Projector();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(amplifier, dvd, projector, lights);

homeTheater.watchMovie("Interstellar", 10, 5);

//Advantages
// 1 - simplified interfaces
// 2 - Reduced dependencies
// 3 - decoupling of subsystemas and client
// 4 - Easier to use
// 5 - Promotes layering

// Caveats or limitations
// 1 - Over abstraction - can lead to unnecessary level of abstraction
// 2 - Limited flexibility - facades limit access to full functionality of the subsystem

//Applications
// E-commerce systems: simplifies client interactions with subsystems like inventory management, payment ProcessingInstruction, shipping
// Banking system
