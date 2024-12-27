function createAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit: (amount) => (balance += amount),
      withdraw: (amount) => (balance -= amount),
      getBalance: () => balance,
    };
  }
  
  const account = createAccount(1000);
  account.deposit(500);
  document.write(account.getBalance()+"<br>"); 

//example
  function createCart() {
    let cart = [];

    return {
        addItem: (item) => {
            cart.push(item);
            return cart; 
        },
        removeItems: (item) => {
            const index = cart.indexOf(item);
            console.log(index)
            console.log(cart)

            if (index > -1) {
                cart.splice(index, 1); 
                document.write(`${item} removed from the cart.<br>`);
            } else {
                document.write(`${item} is not in the cart.<br>`);
            }
            return cart;
        },
       
        clearCart: () => {
            cart = [];
            document.write("Cart has been cleared.");
            return cart;
        },
        getCart: () => cart,
    };
}

const cart = createCart();

cart.addItem("Apple"); 
cart.addItem("Banana"); 
cart.addItem("Cherry"); 
document.write(cart.getCart()+"<br>");

cart.removeItems("Applee"); 
document.write( cart.getCart()+"<br>"); 

cart.clearCart();

//example
let stack= [];
stack.push(10);
stack.push(20);
document.write(stack+"<br>")

let del=stack.pop();
document.write(del+"<br>")
document.write(stack+"<br>")
