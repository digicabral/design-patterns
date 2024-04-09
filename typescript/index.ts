interface Machine {
  print(document: Document): void;
  scan(document: Document): void;
  fax(document: Document): void;
}

class MultifunctionPrinter implements Machine {
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

// Imagine that now I wanted to implement a simple printer: it wouldnt be possible, because we are forced to implement the 3 methods
// In this case we are violating the ISP principle
