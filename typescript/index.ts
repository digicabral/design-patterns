interface ICostumer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface ICostumerBuilder {
  setFirstName(firstName: string): ICostumerBuilder;
  setLastName(lastName: string): ICostumerBuilder;
  setEmail(email: string): ICostumerBuilder;
  setPhoneNumber(phoneNumber: string): ICostumerBuilder;
  build(): ICostumer;
}

class Customer implements ICostumer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string
  ) {}
}

class CostumerBuilder implements ICostumerBuilder {
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private phoneNumber: string = "";

  public setFirstName(firstName: string): ICostumerBuilder {
    this.firstName = firstName;
    return this;
  }
  public setLastName(lastName: string): ICostumerBuilder {
    this.lastName = lastName;
    return this;
  }
  public setEmail(email: string): ICostumerBuilder {
    this.email = email;
    return this;
  }
  public setPhoneNumber(phoneNumber: string): ICostumerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  public build(): ICostumer {
    return new Customer(
      this.firstName,
      this.lastName,
      this.email,
      this.phoneNumber
    );
  }
}

class CustomerDirector {
  constructor(private builder: ICostumerBuilder) {}
  public buildMinimalCustomer(
    firstName: string,
    lastName: string,
    email: string
  ) {
    return this.builder
      .setEmail(email)
      .setFirstName(firstName)
      .setLastName(lastName)
      .build();
  }
}

const builder = new CostumerBuilder();
const director = new CustomerDirector(builder);
const customer = director.buildMinimalCustomer("Jhon", "Doe", "jhon@mail.com");
console.log(customer);
