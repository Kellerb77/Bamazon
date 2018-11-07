// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err){
if(err) throw err;
console.log("connected");
})

connection.query("SELECT * FROM products", function(err, data){
if(err) throw err;
console.log(data);
// design array loop display

// pasted
inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      },

      {
        type: "input",
        name: "quanity",
        message: "How many items would you like to purchase? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ])
    
    .then(function(val) {
      // Check if the user wants to quit the program
     console.log(val.choice);
     console.log(val.quanity);
console.log(val.price)

// code here
connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
[quantity, product.item_id],
    
      // checkIfShouldExit(val.choice);
      // var choiceId = parseInt(val.choice);
      // var product = checkInventory(choiceId, inventory);

      // // If there is a product with the id the user chose, prompt the customer for a desired quantity
      // if (product) {
      //   // Pass the chosen product to promptCustomerForQuantity
      //   promptCustomerForQuantity(product);
      // }
      // else {
      //   // Otherwise let them know the item is not in the inventory, re-run loadProducts
      //   console.log("\nThat item is not in the inventory.");
      //   loadProducts();
      // }
    });
})

