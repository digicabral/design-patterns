//Decorator
//Behavioral and structural design
interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  public cost(): number {
    return 10;
  }
  public description(): string {
    return "Simple coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return this.coffee.description() + ", with Milk";
  }
}

//Client code
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(coffee.cost());
console.log(coffee.description());

/* When to use 
When you have multiple customizations, 
but these customizations are not applied to all the instances

When extending a class is not an option
*/

//Real world implementation
// A common use-case for the decorator patter
// is adding middleware layers to a web server
// request handling pipeline. Middleware components
// can handle tasks such as authentication, logging,
// data validation, error handling, etc

interface ServerRequest {
  handle(request: any): void;
}

class BaseServer implements ServerRequest {
  public handle(request: any): void {
    console.log(`Handling`, request);
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}

  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }
  public handle(request: any): void {
    this.serverRequest.handle(request);
    console.log("Logging middleware ", request);
  }
}

class AuthMiddleware extends ServerRequestDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }

  public handle(request: any): void {
    if (request.isAuthenticated) {
      console.log("Request is authenticated ", request);
      this.serverRequest.handle(request);
    } else {
      console.log("Unauthorized access");
    }
  }
}

//Client
const request = {
  isAuthenticated: true,
  body: "Hello World",
};

let server: ServerRequest = new BaseServer();
server = new LoggingMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);

//Advantages
// Flexible alternative to subclassing:
//   extends behavior at object level, not class level
// Functionality can be added or removed at runtime

// Promotes code reuse and redurces redundancy
//   Each decorator encapsulates a specific feature

// Keeps the code simple and clean
//   Avoids overload of subclasses

// Follows single responsibility principle
//   Each decorator is responsible for a specific feature

//Caveats and criticisms
//1 - Can result in many small objects
//2 - Requires interface compatibility: all classes that implements
//this interface, if it was changed, will also have to implement
//the new method added to the interface.
//3 - Not suitable for adding new methods: same as previous
//4 - Ordering of decorators is important

//Use cases
//GUI toolkits
//Java IO classes
//Middleware in web development
