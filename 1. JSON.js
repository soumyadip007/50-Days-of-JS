// JSON, or JavaScript Object Notation, 
// is a lightweight data-interchange format 
// that is easy for humans to read and write
// and easy for machines to parse and generate.
// It's commonly used for transmitting data
// between a server and a web application as an alternative to XML.


const data = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "isStudent": false,
    "hobbies": ["reading", "hiking", "photography"],
    "address": {
      "street": "123 Main Street",
      "city": "New York",
      "zipcode": "10001"
    }
  }

// Convert the JavaScript object to a JSON string
var jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Parse the JSON string back into a JavaScript object
var parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);