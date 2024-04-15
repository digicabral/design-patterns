// Prototype pattern is a creational design that allows cloning objects
interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}
  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: "Test",
  age: 30,
  email: "test@mail.com",
});

const user2 = user1.clone();

if (user1 === user2) {
  console.log("Both instances are the same");
} else {
  console.log("Separate instances");
}
