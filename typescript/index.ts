interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface Fax {
  fax(document: Document): void;
}

class MultifunctionPrinter implements Printer, Scanner, Fax {
  print(document: Document): void {
    console.log("The machine is printing " + document);
  }
  scan(document: Document): void {
    console.log("The machine is scanning " + document);
  }
  fax(document: Document): void {
    console.log("The machine is sending a fax " + document);
  }
}

// This way we are creating a simple interface for each kind of device
// And the simple printer is not forced to implement methods that wont be used
class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log("The machine is printing " + document);
  }
}
