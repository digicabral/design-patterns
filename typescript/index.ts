class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {
    this.id = id;
    this.price = price;
    this.description = description;
  }
  public display(): void {
    console.log(
      `Id: ${this.id} | Desc: ${this.description} | Price: ${this.price}`
    );
  }
}

class Book extends Product {
  constructor(
    public author: string,
    public title: string,
    public id: string,
    public price: number,
    public description: string
  ) {
    super(id, price, description);
    this.author = author;
    this.title = title;
  }

  public display(): void {
    super.display();
    console.log(`Author: ${this.author} | Title: ${this.title}`);
  }
}

class Electronic extends Product {
  constructor(
    public brand: string,
    public model: string,
    public id: string,
    public price: number,
    public description: string
  ) {
    super(id, price, description);
    this.brand = brand;
    this.model = model;
  }
  public display(): void {
    super.display();
    console.log(`Brand: ${this.brand} | Model: ${this.model}`);
  }
}

const product = new Product("0", 1, "Generic product");
product.display();

const book = new Book("Me", "book test", "1", 10, "book de test");
book.display();

const elet = new Electronic("Apple", "Iphone", "2", 1000, "Cell Phone");
elet.display();
