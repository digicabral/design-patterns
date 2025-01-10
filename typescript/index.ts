//Composite
// The composite pattern is a structural design pattern that lets you compose objects into tree-like structures and then work with these structures as if they were individual objects
// Components;
// 1 - Component: This is an interface for all objects in the CompositionEvent. It defines the default behavior for all objects and behaviors for accessing components in the composite strucutre.
// 2 - Leaf: It defines the behgavior for the elements in the CompositionEvent. It has no children.
// 3 - Composite: It stores child components and implements child related operations in the component interface.

interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

class Developer implements Employee {
  constructor(
    private name: string,
    private salary: number
  ) {}
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRole(): string {
    return "Developer";
  }
}

class Designer implements Employee {
  constructor(
    private name: string,
    private salary: number
  ) {}
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRole(): string {
    return "Designer";
  }
}

//Composite
interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
  private employees: Employee[] = [];

  constructor(
    private name: string,
    private salary: number
  ) {}

  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  getRole(): string {
    return "Manager";
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }
  removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }
  getEmployees(): Employee[] {
    return this.employees;
  }
}

//Client code
const dev1 = new Developer("John Doe", 2000);
const dev2 = new Developer("Jane Doe", 3000);

const designer1 = new Designer("Mark", 4000);

const manager = new Manager("Michael", 100000);

manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(designer1);

console.log(manager);
console.log(manager.getRole());
console.log(manager.getSalary());

//When to use
//When you want a nested object
//When you want to perform operations on collection of objects, in the same way you would operate in individual objects

//Real world example
//Files and folders can contain other files and folders,
// forming a tree-like hierarchy. The composite Pattern can be
// used here as each component in this sstructure
// (either a file or a folder) can be treated uniformly

interface FileSystemComponent {
  getName(): string;
  getSize(): number;
}

class FileComponent implements FileSystemComponent {
  constructor(
    private name: string,
    private size: number
  ) {}
  getName(): string {
    return this.name;
  }
  getSize(): number {
    return this.size;
  }
}

interface CompositeFileSystemComponent extends FileSystemComponent {
  addComponent(component: FileSystemComponent): void;
  removeComponent(component: FileSystemComponent): void;
  getComponents(): FileSystemComponent[];
}

class Folder implements CompositeFileSystemComponent {
  private components: FileSystemComponent[];

  constructor(private name: string) {}

  public addComponent(component: FileSystemComponent): void {
    this.components.push(component);
  }

  public removeComponent(component: FileSystemComponent): void {
    const index = this.components.indexOf(component);
    if (index != -1) {
      this.components.splice(index, 1);
    }
  }

  public getComponents(): FileSystemComponent[] {
    return this.components;
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.components.reduce(
      (total, component) => total + component.getSize(),
      0
    );
  }
}

//Client code

const file1 = new FileComponent("File1.txt", 5);
const file2 = new FileComponent("File2.txt", 10);
const file3 = new FileComponent("File3.txt", 15);

const folder = new Folder("My folder");

folder.addComponent(file1);
folder.addComponent(file2);
folder.addComponent(file3);

console.log(`Folder ${folder.getName()} contains: `);
folder.getComponents().map((component) => {
  console.log(
    `${component.getName()} with the size ${component.getSize()} bytes`
  );
});

console.log(`Total size ${folder.getSize()}`);

//Advantages
//Simplifies the client code
//Easier to add new types of components
//Easily represents hierarchies

//Caveats
// Can violate srp
// Difficult in type checking
// difficulty in restricting components of the composite
// Indirect coupling

//Use cases
// File system representation: treats files and directories uniformly
// GUI compnents: helps in uniform treatment of complex and simple GUI components
// Organizational structures: Models hierarchies in an organization
