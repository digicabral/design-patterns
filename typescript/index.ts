//payment processor
//credit card
//debit card
//paypal
abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
}

class CreditCard extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Processed credit card " + amount);
  }
}

class DebitCard extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Processed debit card " + amount);
  }
}

class PayPal extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Processed paypal payment " + amount);
  }
}

function executePayment(processor: PaymentProcessor, amount: number): void {
  processor.processPayment(amount);
}

const credit = new CreditCard();
const debit = new DebitCard();
const payPal = new PayPal();

executePayment(credit, 10);
executePayment(debit, 20);
executePayment(payPal, 40);

// Any of the child classes can be used to inside the execute payment function without casusing any issue
// We are taking the parent class type as the function parameter
// We can use any of the child classes
// Subtypes must be substitable for their base types
