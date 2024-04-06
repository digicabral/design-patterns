//Lets suppose we need to implement a functionality to give a discount to a customer based on its type
// regular - 10
// premium - 20
// gold  - 30

//Right implementation

interface Customer {
  giveDiscount(): number;
}

class RegularCustomer {
  public giveDiscount(): number {
    return 10;
  }
}
class PremiumCustomer implements Customer {
  public giveDiscount(): number {
    return 20;
  }
}

class GoldCustomer implements Customer {
  public giveDiscount(): number {
    return 30;
  }
}

class Discount {
  giveDiscount(customer: Customer) {
    return customer.giveDiscount();
  }
}
const regular = new RegularCustomer();
const premium = new PremiumCustomer();
const gold = new GoldCustomer();

const disc = new Discount();

console.log(disc.giveDiscount(regular));
console.log(disc.giveDiscount(premium));
console.log(disc.giveDiscount(gold));
