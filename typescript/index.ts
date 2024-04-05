//Lets suppose we need to implement a functionality to give a discount to a customer based on its type
// regular - 10
// premium - 20
// gold  - 30

//Wrong implementation
class Discount {
  public giveDiscount(customerType: "regular" | "premium" | "gold"): number {
    if (customerType === "regular") {
      return 10;
    } else if (customerType === "premium") {
      return 20;
    } else if (customerType === "gold") {
      return 30;
    } else return 10;
  }
}
